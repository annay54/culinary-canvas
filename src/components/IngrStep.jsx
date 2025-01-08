import React from "react";

const IngrStep = ({ type, list }) => {
  // type: 'ingredients' or 'steps'
  // list: array of items; each items is either a string (step) or an object with a 'item', 'measurement' and 'quantity' key (ingredient)
  // list=[
  //   { item: 'Flour', measurement: 'cup', quantity: 1 }, 
  //   { item: 'Sugar', measurement: 'cup', quantity: 1 }
  // ]
  type = "steps"
  list = ["Preheat the oven to 350 degrees", "Mix the flour and sugar", "Bake for 30 minutes"]

  const EditButton = () => {
    return (
      <button className='bg-primary py-1.5 px-2 rounded-lg'><i class="fa-regular fa-pen-to-square text-white w-5 h-5"></i></button>
    )
  }

  const DeleteButton = () => {
    return (
      <button className='bg-red-600 py-1.5 px-2 rounded-lg'><i class="fa-regular fa-trash-can text-white w-5 h-5"></i></button>
    )
  }

  const ConfirmEditButton = () => {
    return (
      <button className='bg-primary py-1.5 px-2 rounded-lg'><i class="fa-solid fa-check text-white w-5 h-5"></i></button>
    )
  }

  const CancelEditButton = () => {
    return (
      <button className='bg-red-600 py-1.5 px-2 rounded-lg'><i class="fa-solid fa-xmark text-white w-5 h-5"></i></button>
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
          {list.map((step, index) => (
            <div className="flex flex-col gap-3">
              <div key={index} className='flex flex-row mt-1 px-4 gap-2 items-center justify-between'>
                <p className='text-textColor'>{index + 1}. {step}</p>
                <div className='flex gap-2'>
                  <EditButton />
                  <DeleteButton />
                </div>
              </div>
              <hr className='w-full border-1 border-secondary'/>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default IngrStep;