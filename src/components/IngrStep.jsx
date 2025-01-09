import React, { useState } from "react";

const IngrStep = ({ type, list }) => {
  // type: 'ingredients' or 'steps'
  // list: array of items; each items is either a string (step) or an object with a 'item', 'measurement' and 'quantity' key (ingredient)
  // list=[
  //   { item: 'Flour', measurement: 'cup', quantity: 1 }, 
  //   { item: 'Sugar', measurement: 'cup', quantity: 1 }
  // ]
  type = "steps"
  list = ["Preheat the oven to 350 degrees", "Mix the flour and sugar", "Bake for 30 minutes"]
  // displayList: array of items from array list to display on the page
  const [displayList, setDisplayList] = useState(list);
  // editList: array of boolean values to determine if an item in the list is being edited
  const [editList, setEditList] = useState(new Array(list.length).fill(false));

  const EditButton = (index) => {
    return (
      <button title='Edit' className='bg-primary py-1.5 px-2 rounded-lg' 
        onClick={() => {
          setEditList(editList.map((value, i) => i === index.index ? true : value))
        }}>
        <i className="fa-regular fa-pen-to-square text-white w-5 h-5"></i>
      </button>
    )
  }

  const DeleteButton = (index) => {
    return (
      <button title='Delete' className='bg-red-600 py-1.5 px-2 rounded-lg'
        onClick={() => {
          // update editList to reflect the new list
          setEditList(editList.filter((_, i) => i !== index.index))
          // remove the item from the displayList
          setDisplayList(displayList.filter((_, i) => i !== index.index))
        }}>
        <i className="fa-regular fa-trash-can text-white w-5 h-5"></i>
      </button>
    )
  }

  const ConfirmEditButton = (index) => {
    return (
      <button title='Save edit' className='bg-primary py-1.5 px-2 rounded-lg'
        onClick={() => {
          displayList[index.index] = document.getElementsByName(index.index)[0].value
          setEditList(editList.map((value, i) => i === index.index ? false : value))
      }}>
        <i className="fa-solid fa-check text-white w-5 h-5"></i>
      </button>
    )
  }

  const CancelEditButton = (index) => {
    return (
      <button title='Cancel edit' className='bg-red-600 py-1.5 px-2 rounded-lg' 
        onClick={() => {
          setEditList(editList.map((value, i) => i === index.index ? false : value))
        }}>
        <i className="fa-solid fa-xmark text-white w-5 h-5"></i>
      </button>
    )
  }

  return (
    <>
      {type === "ingredients" ? (
        <div>
        </div>
      ) : ( // type === "steps"
        <div className='flex flex-col gap-2 w-3/4 h-fit self-center px-4 sm:px-10 py-5'>
          <p className="text-sm">Inserted {list.length} steps</p>
          <hr className='w-full border-1 border-secondary'/>
          {displayList.map((step, index) => (
            <div className="flex flex-col gap-3">
              {editList[index] ? (
                <div className='flex flex-row mt-1 px-4 gap-2 items-center justify-between'>
                  <textarea name={index} defaultValue={step} className='w-full h-24 p-2 border-1 border-secondary rounded-md'></textarea>
                  <div className='flex gap-2'>
                    <ConfirmEditButton index={index} />
                    <CancelEditButton index={index} />
                  </div>
                </div>
              ) : (
                <div className='flex flex-row mt-1 px-4 gap-2 items-center justify-between'>
                  <p className='text-textColor'>{index + 1}. {step}</p>
                  <div className='flex gap-2'>
                    <EditButton index={index} />
                    <DeleteButton index={index} />
                  </div>
                </div>
              )}
              <hr className='w-full border-1 border-secondary'/>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default IngrStep;