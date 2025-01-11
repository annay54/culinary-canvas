import React, { useState } from "react";

const CreateRecipe = () => {
  // there will be a total of 3 steps to create a recipe
  const [step, setStep] = useState(1);
  const [recipe, setRecipe] = useState({"name": "", "description": "", "picture": "", "prepTime": "", "cookTime": "", "servings": ""});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const ProgressSteps = () => (
    <div className="flex flex-row md:gap-2 items-center justify-center self-center w-full h-fit">
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 1 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">1</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Basic info</p>
      </div>
      <hr className="border-2 border-primary w-1/6 md:mb-5" />
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 2 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">2</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Ingredients</p>
      </div>
      <hr className="border-2 border-primary w-1/6 md:mb-5" />
      <div className="flex flex-col items-center gap-0.5">
        <div className={`flex flex-row items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border-primary border-3 ${step >= 3 ? 'bg-primary text-white' : 'bg-inherit text-primary'}`}>
          <h3 className="font-medium text-lg md:text-2xl">3</h3>
        </div>
        <p className="text-secondary font-medium hidden md:inline">Recipe steps</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 self-center w-full h-fit px-5 sm:px-10 md:px-20 py-8">
      <h2 className="text-secondary">Add a new recipe</h2>
      <ProgressSteps />
    </div>
  )
}

export default CreateRecipe;