import React, { useEffect } from "react";
import RecipeCard from '@/components/RecipeCard';
import Pagination from "@/components/Pagination";
import { Select, SelectItem, RadioGroup, Radio } from "@nextui-org/react";
import { getAllRecipes, getAllTags } from "./util/recipeAPI";
import toast from "react-hot-toast";

const Explore = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];
  const [selectTags, setSelectTags] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(5);
  const [sortBy, setSortBy] = React.useState("rating");
  const [sortOrder, setSortOrder] = React.useState("descending");
  // format of filter array from beginning to end: page, numRecipes, min, max, sortBy, sortOrder, tags
  const [filter, setFilter] = React.useState({
    page: 1,
    numRecipes: 10,
    min: 0,
    max: 5,
    tags: [],
    sortBy: sortBy,
    sortOrder: sortOrder,
  })

  // Runs below code on page load and when deps parameter value is updated
  useEffect(() => {
    // fetch recipes from database
    getAllTags().then()
    toast.promise(
      getAllRecipes(filter).then((res) => {setRecipes(res)}).catch((err) => {console.error(err)}), {
        loading: "Loading recipes...",
      }
    )
  }, [filter]);

  const handleMinChange = (selectedOption) => {
    setMin(parseInt(selectedOption.target.value))
  }

  const handleMaxChange = (selectedOption) => {
    setMax(parseInt(selectedOption.target.value))
  }

  const handleSortBy = (selectedOption) => {
    setSortBy(selectedOption.target.value)
  }

  const handleSortOrder = (selectedOption) => {
    setSortOrder(selectedOption.target.value)
  }

  const handleFilter = (e) => {
    // selectTags is a Set object, not a list
    // create a list using selectTags
    let extractTags = []
    for (const tag of selectTags) {
      extractTags.push(tag)
    }

    console.log(min, max, extractTags, sortBy, sortOrder)
    setFilter({
      page: 1,
      numRecipes: 10,
      min: min,
      max: max,
      tags: extractTags,
      sortBy: sortBy,
      sortOrder: sortOrder,
    })
  }

  const FilterContent = ({isMobile = false}) => {
    return (
      <>
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row items-center gap-2 mt-2">
            <i aria-hidden className="fa-solid fa-sliders text-xl"></i>
            <h3>Filters</h3>
          </div>
          {/* close button */}
          {isMobile &&
            <button className="p-4 bg-primary" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <i aria-hidden className={"fa-solid fa-xmark fa-lg"}></i>
            </button>
          }
        </div>
        <hr></hr>
        <div>
          {/* Rating filter section */}
          <p className="font-normal text-xl">Rating</p>
          <div className="flex flex-row items-center gap-2 m-2">
            <p className="text-base">Minimum</p>
            <select className="text-secondary text-base w-12 h-8 p-1 rounded-xl border-2" value={min} onChange={handleMinChange}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="flex flex-row items-center gap-2 m-2">
            <p className="text-base">Maximum</p>
            <select className="text-secondary text-base w-12 h-8 p-1 rounded-xl border-2" value={max} onChange={handleMaxChange}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div>
          {/* Tags filter section */}
          <p className="font-normal text-xl">Tags</p>
          <div className="m-2">
            <Select
              items={tags}
              placeholder="Select tags"
              variant="flat"
              isMultiline={true}
              selectionMode="multiple"
              selectedKeys={selectTags}
              onSelectionChange={setSelectTags}
              classNames={{ 
                mainWrapper: "border-2 border-secondary rounded-xl",
                listbox: "text-secondary",
                selectorIcon: "text-secondary",
                trigger: "bg-white",
              }}
            >
              {tags.map((tag) => (
                <SelectItem key={tag}>{tag}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row items-center gap-2 my-2">
          <i aria-hidden className="fa-solid fa-sort text-xl"></i>
          <h3>Sort</h3>
        </div>
        <hr></hr>
        {/* Sort by variable section */}
        <RadioGroup
          color="secondary"
          defaultValue={sortBy}
          className="ml-2"
          onChange={handleSortBy}
        >
          <Radio value="rating" classNames={{ label:"text-white" }}>Rating</Radio>
          <Radio value="create" classNames={{ label:"text-white" }}>Create date</Radio>
          <Radio value="favourite" classNames={{ label:"text-white" }}>Favourite</Radio>
          <Radio value="time" classNames={{ label:"text-white" }}>Recipe time</Radio>
        </RadioGroup>
        <hr></hr>
        {/* De/Ascending sort section */}
        <RadioGroup
          color="secondary"
          defaultValue={sortOrder}
          className="ml-2"
          onChange={handleSortOrder}
        >
          <Radio value="descending" classNames={{ label:"text-white" }}>Descending</Radio>
          <Radio value="ascending" classNames={{ label:"text-white" }}>Ascending</Radio>
        </RadioGroup>
        <button className="rounded-xl w-28 p-2 mx-2 mt-4 mb-8 font-medium hover:opacity-90" onClick={handleFilter}>Apply</button>
      </>
    )
  }

  return (
    <>
      {/* Mobile Filter column */}
      <div className="sticky top-0" >
        <div className="absolute">
          <div className={`flex lg:hidden relative bg-primary min-w-[260px] w-1/4 sm:max-w-[330px] h-lvh flex-col text-white gap-2 px-4 py-2 transition ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* toggle button */}
            {!isFilterOpen &&
              <button className="absolute top-0 -right-10 lg:hidden p-4 bg-primary" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <i aria-hidden className={`fa-solid ${isFilterOpen ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
              </button>
            }

            <FilterContent isMobile={true} />
          </div>
        </div>
      </div>
        
      <div className="lg:flex lg:flex-row ">
        {/* Desktop Filter column */}
        <div className={`hidden lg:flex relative bg-primary min-w-[260px] w-1/4 sm:max-w-[330px] sm:h-auto flex-col text-white gap-2 px-4 py-2`}>
          <FilterContent />
        </div>

        {/* Search and result column */}
        <div className="flex flex-col justify-between items-center w-full lg:w-3/4 min-h-screen py-6">
          <div className="flex flex-col items-center h-full w-full">
            {/* hero */}
            <h1 className="text-secondary">Explore</h1>

            {/* Search bar  */}
            <div className="border-2 border-solid border-primary text-primary bg-white py-0 px-3 my-4 h-10 w-4/5 rounded-xl">
              <i aria-hidden className="fa-solid fa-search text-base"></i>
              <input
                type="text"
                placeholder="Search for recipes or creators"
                className=" border-none focus:outline-none font-normal text-base h-9 py-0 w-11/12 placeholder-primary">
              </input>
            </div>
            {/* Number of results shown from search */}
            <div className="text-secondary w-11/12">
              <hr className="border-primary border-1"></hr>
              <p className="text-textColor font-normal text-base my-2 px-4">{recipes.length} out of {recipes.length} results</p>
              <hr className="border-primary border-1"></hr>
            </div>
            {/* Result recipes from search */}
            <div className="flex flex-wrap p-6 gap-5 justify-center">
              {recipes.length == 0 ? ( 
                <p className="h-full">No recipes found! Try searching for a different recipe.</p>
              ) : (
                <>{recipes.map((recipe, index) => (
                  <RecipeCard key={index} name={recipe.recipe_name} author={recipe.author} image={recipe.img} rating={recipe.rating} />
                ))}</>
              )
              }
            </div>
          </div>
          {/* Pagination */}
          <div className="pt-4 pb-8">
            <Pagination pageLength={4} mainColour="secondary" textColour="white" hoverColour="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore;