import React, { useState } from "react";

const CreateRecipe = () => {
  // there will be a total of 3 steps to create a recipe
  const [step, setStep] = useState(1);
  const [recipe, setRecipe] = useState({"name": "", "description": "", "picture": "", "prepTime": "", "cookTime": "", "servings": ""});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  // displayList: array of items from array list to display on the page
  // editList: array of boolean values to determine if an item in the list is being edited
  const [displayList, setDisplayList] = useState([]);
  const [editList, setEditList] = useState([]);

  // first element of list measurements should be the default value
  const measurements = ["none", "tsp", "tbsp", "cup", "pinch", "oz", "ml", "l", "lbs", "g", "kg", ]

  const saveRecipe = () => {
    if (step === 1)
      setRecipe({
        "name": document.getElementsByName("name")[0].value,
        "description": document.getElementsByName("about")[0].value,
        "picture": "",
        "prepTime": document.getElementsByName("prepHour")[0].value + ":" + document.getElementsByName("prepMin")[0].value,
        "cookTime": document.getElementsByName("cookHour")[0].value + ":" + document.getElementsByName("cookMin")[0].value,
        "servings": document.getElementsByName("servings")[0].value
      })
    else if (step === 2)
      setIngredients(displayList)
    else // step === 3
      setSteps(displayList)
  }

  const handleNextStep = () => {
    saveRecipe();
    if (step === 1) {
      console.log(recipe);
      setStep(2);
      setDisplayList(ingredients);
      setEditList(new Array(ingredients.length).fill(false));
      console.log(displayList);
    } else { // step === 2
      setStep(3);
      setDisplayList(steps);
      setEditList(new Array(steps.length).fill(false));
    }
  }

  const handleBackStep = () => {
    saveRecipe();
    if (step === 2) {
      setStep(1);
    } else { // step === 3
      setStep(2);
    }
  }

  const pushList = (type) => {
    if (type === "ingredients") {
      setDisplayList(displayList.concat({
        "quantity": document.getElementsByName("quantity")[0].value, 
        "measurement": document.getElementsByName("measurement")[0].value, 
        "item": document.getElementsByName("item")[0].value 
      }));
      setEditList(editList.concat(false));
    }
    else { // type === "steps"
    }
  }

  const ProgressSteps = () => (
    <div className="flex flex-row md:gap-2 items-center justify-center self-center w-full h-fit">
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 1 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">1</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Basic info</p>
      </div>
      <hr className="border-1.5 border-primary w-1/6 md:mb-5" />
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 2 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">2</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Ingredients</p>
      </div>
      <hr className="border-1.5 border-primary w-1/6 md:mb-5" />
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 3 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">3</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Recipe steps</p>
      </div>
    </div>
  );

  const IngrStep = ({ type }) => {
    // type: 'ingredients' or 'steps'

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
            // update the list of ingredients or steps
            // if (type === "ingredients")
            //   setIngredients(ingredients.filter((_, i) => i !== index.index))
            // else
            //   setSteps(steps.filter((_, i) => i !== index.index))
          }}>
          <i className="fa-regular fa-trash-can text-white w-5 h-5"></i>
        </button>
      )
    }
  
    const ConfirmEditButton = (index) => {
      return (
        <button title='Save edit' className='bg-primary py-1.5 px-2 rounded-lg'
          onClick={() => {
            if (type === "ingredients") {
              displayList[index.index] = {
                quantity: document.getElementsByName(index.index)[0].value,
                measurement: document.getElementsByName(index.index)[1].value,
                item: document.getElementsByName(index.index)[2].value
              }
              // setIngredients(ingredients.map((value, i) => i === index.index ? displayList[index.index] : value))
            }
            else {
              displayList[index.index] = document.getElementsByName(index.index)[0].value
              // setSteps(steps.map((value, i) => i === index.index ? displayList[index.index] : value))
            }
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

  return (
    <div className="flex flex-col gap-4 self-center w-full h-fit px-5 sm:px-10 md:px-20 xl:px-56 py-8">
      <h2 className="text-secondary text-4xl">Add a new recipe</h2>
      <ProgressSteps />
      <hr className="border-1.5 border-primary w-full" />
      {step === 1 ? (
        <>
          <div className="flex flex-col gap-1 w-full">
            <h3 className="text-secondary font-medium">Name of your recipe</h3>
            <input type="text" name="name" defaultValue={recipe.name} className="w-full h-10 border-2 border-primary rounded-lg px-2" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h3 className="text-secondary font-medium">About your recipe</h3>
            <textarea name="about" defaultValue={recipe.description} className="w-full h-44 max-h-72 border-2 border-primary rounded-lg px-2" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h3 className="text-secondary font-medium">Upload a picture of your recipe</h3>
            <div className="flex flex-col w-full h-56 bg-white border-2 border-primary rounded-lg items-center justify-center">
              <i className="fa-solid fa-image text-4xl text-primary"></i>
              <h3 className="font-medium">Drag & drop or browse</h3>
              <p className="text-gray-600 font-normal text-base">Supports: JPEG, JPG, PNG</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-1 w-full">
            <div className="flex flex-col gap-1 w-fit">
              <h3 className="text-secondary font-medium">Preparation time</h3>
              <div className="flex flex-row gap-2 items-center">
                <input type="number" name="prepHour" min={0} max={24} defaultValue={recipe.prepTime.split(":")[0]} className="w-16 h-10 border-2 border-primary rounded-lg px-2" />
                <p>hours</p>
                <input type="number" name="prepMin" min={0} max={59} defaultValue={recipe.prepTime.split(":")[1]} className="w-16 h-10 border-2 border-primary rounded-lg px-2" />
                <p>minutes</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <h3 className="text-secondary font-medium">Cooking time</h3>
              <div className="flex flex-row gap-2 items-center">
                <input type="number" name="cookHour" min={0} max={24} defaultValue={recipe.cookTime.split(":")[0]} className="w-16 h-10 border-2 border-primary rounded-lg px-2" />
                <p>hours</p>
                <input type="number" name="cookMin" min={0} max={59} defaultValue={recipe.cookTime.split(":")[1]} className="w-16 h-10 border-2 border-primary rounded-lg px-2 " />
                <p>minutes</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <h3 className="text-secondary font-medium">Number of servings</h3>
              <input type="number" name="servings" min={1} defaultValue={recipe.servings} className="w-20 h-10 border-2 border-primary rounded-lg px-2" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 w-fit self-start sm:self-end py-10">
            <button className="w-28 h-10 bg-primary text-white font-medium rounded-lg self-center" onClick={saveRecipe}>Save</button>
            <button className="w-28 h-10 bg-secondary text-white font-medium rounded-lg self-center" onClick={handleNextStep}>
              Next
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </>
      ) : step === 2 ? (
        <>
          <div className="flex flex-col gap-1 w-full mb-5">
            <h3 className="text-secondary font-medium">Ingredients</h3>
            <p>For example: 3/4 cup(s) cream cheese</p>
            <div className="flex flex-row mt-2 gap-3 md:gap-5 w-full flex-wrap md:flex-nowrap">
              <div className="flex flex-col gap-1 w-fit mr-2 md:mr-0">
                <p className="font-medium text-lg">Quantity</p>
                <input type="text" name="quantity" className="w-24 h-10 border-2 border-primary rounded-lg px-2" />
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <p className="font-medium text-lg">Measurement</p>
                <select name="measurement" defaultValue={measurements[0]} className='h-10 border-2 border-primary rounded-lg px-2'>
                  {measurements.map((measurement) => (
                    <option value={measurement}>{measurement}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-medium text-lg">Item</p>
                <input type="text" name="item" className="w-full h-10 border-2 border-primary rounded-lg px-2" />
              </div>
            </div>
            <button className="w-28 h-10 mt-4 bg-primary text-white font-medium rounded-lg" onClick={() => {
              pushList("ingredients");
              document.getElementsByName("quantity")[0].value = "";
              document.getElementsByName("measurement")[0].value = measurements[0];
              document.getElementsByName("item")[0].value = "";
            }}>
              Add
            </button>
          </div>
          <IngrStep type={"ingredients"} />
          <div className="flex flex-col sm:flex-row gap-5 w-fit self-start sm:self-end py-10">
            <button className="w-28 h-10 bg-primary text-white font-medium rounded-lg self-start" onClick={saveRecipe}>Save</button>
            <div className="flex flex-row gap-5">
              <button className="w-28 h-10 bg-secondary text-white font-medium rounded-lg self-center" onClick={handleBackStep}>
                <i className="fa-solid fa-arrow-left mr-2"></i>
                Back
              </button>
              <button className="w-28 h-10 bg-secondary text-white font-medium rounded-lg self-center" onClick={handleNextStep}>
                Next
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </>
      ) : ( // step === 3
        <>
        </>
      )}
    </div>
  )
}

export default CreateRecipe;