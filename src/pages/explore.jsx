import React from "react";
import RecipeCard from '@/components/RecipeCard';
import {Select, SelectItem, RadioGroup, Radio, cn, image} from "@nextui-org/react";

const Explore = () => {
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

  return (
    <div className="flex flex-row ">
      {/* Filter column */}
      <div className="bg-primary w-1/4 h-auto flex flex-col text-white gap-2 px-4 py-2
        min-[1024px]:w-1/5">
        <div className="flex flex-row items-center gap-2 mt-2">
          <i className="fa-solid fa-sliders text-2xl"></i>
          <h2>Filters</h2>
        </div>
        <hr></hr>
        <div>
          <h3>Rating</h3>
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
          <h3>Tags</h3>
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
          <i className="fa-solid fa-sort text-2xl"></i>
          <h2>Sort</h2>
        </div>
        <hr></hr>
        <RadioGroup
          color="secondary"
          defaultValue="rating"
          className="ml-2"
        >
          {/* change text colour of radio slots font-size: 1.5rem; */}
          <Radio value="rating" classNames={{ label:"text-white" }}>Rating</Radio>
          <Radio value="create" classNames={{ label:"text-white" }}>Create date</Radio>
          <Radio value="favourite" classNames={{ label:"text-white" }}>Favourite</Radio>
          <Radio value="time" classNames={{ label:"text-white" }}>Recipe time</Radio>
        </RadioGroup>
        <hr></hr>
        <RadioGroup
          color="secondary"
          defaultValue="descending"
          className="ml-2"
        >
          <Radio value="descending" classNames={{ label:"text-white" }}>Descending</Radio>
          <Radio value="ascending" classNames={{ label:"text-white" }}>Ascending</Radio>
        </RadioGroup>
        <button className="rounded-xl w-28 p-2 mx-2 mt-4 mb-20 font-medium hover:opacity-90">Apply</button>
      </div>
      {/* Search and result column */}
      <div className="w-3/4 h-auto flex flex-col items-center min-[1024px]:w-4/5">
        <div className="border-2 border-solid border-primary text-primary bg-white py-1 px-3 my-4 h-12 w-4/5 rounded-xl">
          <i className="fa-solid fa-search text-lg"></i>
          <input
            type="text"
            placeholder="Search for recipes or creators"
            className=" border-none focus:outline-none font-normal h-9 py-0 w-11/12 placeholder-primary">
          </input>
        </div>
        <div className="text-secondary w-11/12">
          <hr className="border-primary border-1"></hr>
          <p className="font-normal text-base my-2">6 out of 20 results</p>
          <hr className="border-primary border-1"></hr>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-6 gap-16">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore;