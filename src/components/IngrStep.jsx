import React from "react";

const IngrStep = ({ type, list }) => {
  // type: 'ingredients' or 'steps'
  // list: array of items; each items is either a string (step) or an object with a 'item', 'measurement' and 'quantity' key (ingredient)
  
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
    <div>
    </div>
  )
}

export default IngrStep;