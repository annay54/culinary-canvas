import React, { useState } from "react";

const CreateRecipe = () => {
  // there will be a total of 3 steps to create a recipe
  const [step, setStep] = useState(1);
  const [recipe, setRecipe] = useState({"name": "", "description": "", "picture": "", "prepTime": "", "cookTime": "", "servings": ""});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const saveRecipe = () => {
    recipe.name = document.getElementsByName("name")[0].value;
    recipe.description = document.getElementsByName("about")[0].value;
    // recipe.picture = document.getElementsByName("picture")[0].value;
    recipe.prepTime = document.getElementsByName("prepHour")[0].value + ":" + document.getElementsByName("prepMin")[0].value;
    recipe.cookTime = document.getElementsByName("cookHour")[0].value + ":" + document.getElementsByName("cookMin")[0].value;
    recipe.servings = document.getElementsByName("servings")[0].value;
    console.log(recipe);
    console.log("Recipe saved");
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

  return (
    <div className="flex flex-col gap-4 self-center w-full h-fit px-5 sm:px-10 md:px-20 xl:px-56 py-8">
      <h2 className="text-secondary text-4xl">Add a new recipe</h2>
      <ProgressSteps />
      <hr className="border-1.5 border-primary w-full" />
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-secondary font-medium">Name of your recipe</h3>
        <input type="text" name="name" className="w-full h-10 border-2 border-primary rounded-lg px-2 font-normal" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-secondary font-medium">About your recipe</h3>
        <textarea name="about" className="w-full h-44 max-h-72 border-2 border-primary rounded-lg px-2 font-normal" />
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
            <input type="number" name="prepHour" min={0} max={24} className="w-16 h-10 border-2 border-primary rounded-lg px-2 font-normal" />
            <p>hours</p>
            <input type="number" name="prepMin" min={0} max={59} className="w-16 h-10 border-2 border-primary rounded-lg px-2 font-normal" />
            <p>minutes</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <h3 className="text-secondary font-medium">Cooking time</h3>
          <div className="flex flex-row gap-2 items-center">
            <input type="number" name="cookHour" min={0} max={24} className="w-16 h-10 border-2 border-primary rounded-lg px-2 font-normal" />
            <p>hours</p>
            <input type="number" name="cookMin" min={0} max={59} className="w-16 h-10 border-2 border-primary rounded-lg px-2 font-normal" />
            <p>minutes</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <h3 className="text-secondary font-medium">Number of servings</h3>
          <input type="number" name="servings" min={1} className="w-20 h-10 border-2 border-primary rounded-lg px-2 font-normal" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 w-fit self-start sm:self-end py-10">
        <button className="w-32 h-12 bg-primary text-white font-medium rounded-lg self-center" onClick={saveRecipe}>Save</button>
        <button className="w-32 h-12 bg-secondary text-white font-medium rounded-lg self-center" onClick={saveRecipe}>
          Next
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  )
}

export default CreateRecipe;