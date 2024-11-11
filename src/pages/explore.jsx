import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

const Explore = () => {
  const ratings = [1, 2, 3, 4, 5];
  const tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];
  const [values, setValues] = React.useState([]);

  return (
    <div className="flex flex-row ">
      {/* Filter column */}
      <div className="bg-primary w-1/3 h-fit flex flex-col text-white gap-2 px-4 py-2">
        <div className="flex flex-row items-center gap-2 mt-2">
          <i className="fa-solid fa-sliders text-2xl"></i>
          <h2>Filters</h2>
        </div>
        <hr></hr>
        <div>
          <h3>Rating</h3>
          <div className="flex flex-row items-center gap-2 m-2">
            <p>Minimum</p>
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
            <p>Maximum</p>
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
              className="max-w-xs"
              selectedKeys={values}
              onSelectionChange={setValues}
              style={{ color: "#A55913", border: "2px solid #A55913" }}
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
      </div>
      {/* Search and result column */}
      <div className="w-2/3 h-auto">
        search
      </div>
    </div>
  )
}

export default Explore;