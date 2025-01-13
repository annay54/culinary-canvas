import React, { useState } from "react";

const IngrStep = ({ type, list }) => {
  // type: 'ingredients' or 'steps'
  // list: array of items; each items is either a string (step) or an object with a 'item', 'measurement' and 'quantity' key (ingredient)
  // list=[
  //   { item: 'Flour', measurement: 'cup', quantity: '1' }, 
  //   { item: 'Sugar', measurement: 'tbsp', quantity: '1' },
  //   { item: 'Butter', measurement: 'cup', quantity: '1/2' },
  //   { item: 'Eggs', measurement: 'none', quantity: '2' },
  // ]
  // type = "ingredients";
  // type = "steps";
  // list = ["Preheat the oven to 350 degrees", "Mix the flour and sugar", "Bake for 30 minutes"]
  const measurements = ["none", "tsp", "tbsp", "cup", "pinch", "oz", "ml", "l", "lbs", "g", "kg", ]

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
          // remove the item from the displayList
          setDisplayList(displayList.filter((_, i) => i !== index.index))
          // update editList to reflect the new list with all values set to false values
          setEditList(new Array(displayList.length).fill(false))
        }}>
        <i className="fa-regular fa-trash-can text-white w-5 h-5"></i>
      </button>
    )
  }

  const ConfirmEditButton = (index) => {
    return (
      <button title='Save edit' className='bg-primary py-1.5 px-2 rounded-lg'
        onClick={() => {
          if (type === "ingredients")
            displayList[index.index] = {
              quantity: document.getElementsByName(index.index)[0].value,
              measurement: document.getElementsByName(index.index)[1].value,
              item: document.getElementsByName(index.index)[2].value
            }
          else
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
        <div className='flex flex-col gap-2 w-full h-fit self-center'>
        <p className="text-sm">Inserted {displayList.length} ingredients</p>
        <hr className='w-full border-1 border-secondary'/>
        {displayList.map((ingr, index) => (
          <div className="flex flex-col gap-3">
            {editList[index] ? (
              <div className='flex flex-col sm:flex-row mt-1 px-4 gap-2 items-end sm:items-center justify-between'>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full">
                  <input name={index} defaultValue={ingr.quantity} className='w-1/12 min-w-12 p-2 border-2 border-secondary rounded-md'/>
                  <select name={index} defaultValue={ingr.measurement} className='w-2/12 min-w-24 p-2 border-2 border-secondary rounded-md'>
                    {measurements.map((measurement) => (
                      <option value={measurement}>{measurement}</option>
                    ))}
                  </select>
                  <input name={index} defaultValue={ingr.item} className='w-10/12 p-2 border-2 border-secondary rounded-md'/>
                </div>
                <div className='flex gap-2'>
                  <ConfirmEditButton index={index} />
                  <CancelEditButton index={index} />
                </div>
              </div>
            ) : (
              <div className='flex flex-row mt-1 px-4 gap-2 items-center justify-between'>
                {ingr.measurement === 'none' ? (
                  <p className='text-textColor'>{ingr.quantity} {ingr.item}</p>
                ) : (
                  <p className='text-textColor'>{ingr.quantity} {ingr.measurement} {ingr.item}</p>
                )}
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
      ) : ( // type === "steps"
        <div className='flex flex-col gap-2 w-3/4 h-fit self-center px-4 sm:px-10 py-5'>
          <p className="text-sm">Inserted {displayList.length} steps</p>
          <hr className='w-full border-1 border-secondary'/>
          {displayList.map((step, index) => (
            <div className="flex flex-col gap-3">
              {editList[index] ? (
                <div className='flex flex-row mt-1 px-4 gap-2 items-center justify-between'>
                  <textarea name={index} defaultValue={step} className='w-full h-24 max-h-48 p-2 border-1 border-secondary rounded-md'></textarea>
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