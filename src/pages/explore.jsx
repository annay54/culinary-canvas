import React from "react";
import RecipeCard from '@/components/RecipeCard';
import Pagination from "@/components/Pagination";
import {Select, SelectItem, RadioGroup, Radio, cn, image} from "@nextui-org/react";

const Explore = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const ratings = [1, 2, 3, 4, 5];
  const tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];
  const [values, setValues] = React.useState([]);
  const recipes = [
    {
      name: "Recipe 1",
      author: "Author 1",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5
    },
    {
      name: "Recipe 2",
      author: "Author 2",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    },
    {
      name: "Recipe 3",
      author: "Author 3",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4
    },
    {
      name: "Recipe 4",
      author: "Author 4",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3
    },
    {
      name: "Recipe 5",
      author: "Author 5",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 2.5
    },
    {
      name: "Recipe 6",
      author: "Author 6",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 1
    },
  ];

  const FilterContent = ({isMobile = false}) => {
    return (
      <>
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row items-center gap-2 mt-2">
            <i className="fa-solid fa-sliders text-xl"></i>
            <h3>Filters</h3>
          </div>
          {/* close button */}
          {isMobile &&
            <button className="p-4 bg-primary" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <i className={"fa-solid fa-xmark fa-lg"}></i>
            </button>
          }
        </div>
        <hr></hr>
        <div>
          {/* Rating filter section */}
          <p className="font-normal text-xl">Rating</p>
          <div className="flex flex-row items-center gap-2 m-2">
            <p className="text-base">Minimum</p>
            <select className="text-secondary text-base w-12 h-8 p-1 rounded-xl border-2">
              <option value={null}>-</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="flex flex-row items-center gap-2 m-2">
            <p className="text-base">Maximum</p>
            <select className="text-secondary text-base w-12 h-8 p-1 rounded-xl border-2">
            <option value={null}>-</option>
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
              selectedKeys={values}
              onSelectionChange={setValues}
              classNames={{ 
                mainWrapper: "border-2 border-secondary rounded-xl",
                listbox: "text-secondary",
                selectorIcon: "text-secondary",
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
          <i className="fa-solid fa-sort text-xl"></i>
          <h3>Sort</h3>
        </div>
        <hr></hr>
        {/* Sort by variable section */}
        <RadioGroup
          color="secondary"
          defaultValue="rating"
          className="ml-2"
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
          defaultValue="descending"
          className="ml-2"
        >
          <Radio value="descending" classNames={{ label:"text-white" }}>Descending</Radio>
          <Radio value="ascending" classNames={{ label:"text-white" }}>Ascending</Radio>
        </RadioGroup>
        <button className="rounded-xl w-28 p-2 mx-2 mt-4 mb-8 font-medium hover:opacity-90">Apply</button>
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
                <i className={`fa-solid ${isFilterOpen ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
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
        <div className=" w-full lg:w-3/4 h-auto flex flex-col items-center">
          {/* hero */}
          <h1 className="text-secondary my-8 mt-12">Explore</h1>

          {/* Search bar  */}
          <div className="border-2 border-solid border-primary text-primary bg-white py-0 px-3 my-4 h-10 w-4/5 rounded-xl">
            <i className="fa-solid fa-search text-base"></i>
            <input
              type="text"
              placeholder="Search for recipes or creators"
              className=" border-none focus:outline-none font-normal text-base h-9 py-0 w-11/12 placeholder-primary">
            </input>
          </div>
          {/* Number of results shown from search */}
          <div className="text-secondary w-11/12">
            <hr className="border-primary border-1"></hr>
            <p className="font-normal text-base my-2">6 out of 20 results</p>
            <hr className="border-primary border-1"></hr>
          </div>
          {/* Result recipes from search */}
          <div className="flex flex-wrap p-6 gap-6 sm:gap-16 justify-center">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
            ))}
          </div>
          {/* Pagination */}
          <div className="pt-4 pb-8">
            <Pagination pageLength={4} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore;