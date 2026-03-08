import React, { useState } from "react";
import RecipeTag from "./RecipeTag";
import { Avatar } from "@nextui-org/avatar";
import { useSession } from "next-auth/react";
import { isFavRecipe, addDeleteFavRecipe } from "@/pages/util/favRecipeAPI";
import ReadOnlyTiptap from "./ReadOnlyTiptap";

const RecipePage = ({ recipe, ingrs, steps, authorImg, numRating, isCreate }) => {
  const { data: session } = useSession()
  const [isFav, setIsFav] = useState(false);
  const [prepTime, setPrepTime] = useState("0 mins");
  const [cookTime, setCookTime] = useState("0 mins");
  const [totalTime, setTotalTime] = useState("0 mins");

  React.useEffect(() => {
    if (session && isCreate != null) {
      isFavRecipe(recipe.recid, session.user.id).then((res) => {
        setIsFav(res);
      })
    }
    const parsePrepTime = recipe.prep_time.split(":")
    const parseCookTime = recipe.cook_time.split(":")
    // consider special case: when hour and mins for prep time or cook time are both 0
    if (parseInt(parsePrepTime[0]) == 0 && parseInt(parsePrepTime[1]) == 0) {
      setPrepTime("0 mins")
    } else {
      setPrepTime(`${parseInt(parsePrepTime[0]) == 0 ? "" : parsePrepTime[0] + " hr"}` + `${parseInt(parsePrepTime[0]) == 0 || parseInt(parsePrepTime[1]) == 0? " " : ", "}` + `${parseInt(parsePrepTime[1]) == 0 ? "" : parsePrepTime[1] + " mins"}`)
    }
    if (parseInt(parseCookTime[0]) == 0 && parseInt(parseCookTime[1]) == 0) {
      setCookTime("0 mins")
    } else {
      setCookTime(`${parseInt(parseCookTime[0]) == 0 ? "" : parseCookTime[0] + " hr"}` + `${parseInt(parseCookTime[0]) == 0 || parseInt(parseCookTime[1]) == 0 ? " ": ", "}` + `${parseInt(parseCookTime[1]) == 0 ? "" : parseCookTime[1] + " mins"}`)
    }

    // convert sum of prep time and cook time mins to hours if necessary
    const sumMin = parseInt(parsePrepTime[1]) + parseInt(parseCookTime[1])
    let totalMin = sumMin
    let totalHr = parseInt(parsePrepTime[0]) + parseInt(parseCookTime[0])
    if (sumMin >= 60) {
      totalMin = sumMin % 60
      totalHr += Math.floor(sumMin / 60)
    }
    // also consider special case: when totalHr and totalMin are both 0
    setTotalTime(`${totalHr > 0 ? totalHr + "  hr" : ""}` + `${totalHr > 0 
      && totalMin > 0 ? ", " : " "}` + `${totalMin > 0 ? totalMin + " mins" : ""}` 
      + `${totalHr == 0 && totalMin == 0 ? "0 mins" : ""}`)

  }, [session])

  const Instruction = ({ step, description }) => (
    <div className='flex flex-row gap-2'>
      <div className='flex w-10 h-10 shrink-0 justify-center items-center rounded-full text-primary border-2 border-primary'>
        {step}
      </div>
      <p className='flex items-center'>{description}</p>
    </div>
  );

  const Ingredient = ({ name, quantity }) => (
    <div className='flex flex-row gap-2 justify-between'>
      <p>{name}</p>
      <p className='text-textColor text-right'>{quantity}</p>
    </div>
  );

  const handleFav = () => {
    addDeleteFavRecipe(recipe.recid, session.user.id, isFav)
    setIsFav(!isFav)
  }

  return (
    <div className='pt-16 md:mx-[10%] mx-[5%]'>
      {/* hero */}
      {recipe.img && (
        <img 
          src={recipe.img}
          alt="pancake" 
          className='w-full md:w-full h-[250px] md:h-[400px] object-cover z-0 relative'
        />
      )}
      <div className='px-4 bg-white w-fit -mt-4 ml-[4%] z-40 relative'>
        <h1 className='text-secondary max-md:text-4xl max-md:py-2'>{recipe.recipe_name}</h1>
      </div>

      {/* Show favourite button when user is logged in and recipe page is not a preview for creating recipe */}
      {session && isCreate != null && (
        <div className='flex justify-end -mt-6 md:-mt-10'>
          <button className='p-0 bg-transparent z-50' onClick={handleFav}>
            <i aria-hidden className={`fa-star text-primary fa-2xl ${isFav ? 'fa-solid' : 'fa-regular'}`}></i>
          </button>
        </div>
      )}

      <div className='flex flex-col gap-4 mt-2 md:mt-8'>
        {/* author */}
        <div className='gap-2 flex flex-row items-center'>
          {/* <img 
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[50px] h-[50px] object-cover rounded-full'
          /> */}
          <Avatar className='w-[50px] h-[50px] object-cover rounded-full' image={authorImg ? authorImg : null} />
          <h3 className='text-secondary'>{recipe.author}</h3>
        </div>

        <div className='flex flex-col'>
          {/* rating */}
          <div className='flex flex-row gap-2 items-center'>
            <h2 className='text-primary max-md:text-xl'>{recipe.rating}</h2>
            <div className='flex flex-row gap-1'>
              {[1, 2, 3, 4, 5].map((star, index) => (
                <i aria-hidden key={index} className={`fa-star text-primary fa-lg ${recipe.rating >= star ? "fa-solid" : "fa-regular"}`} />
              ))}
            </div>
            <div>({numRating ? numRating : 0})</div>
          </div>

          {/* time and review */}
          <div className='flex flex-wrap md:flex-row gap-x-8'>
            <div className='flex flex-row gap-2 items-center'>
              <i aria-hidden className='fa-solid fa-clock text-textColor' />
              <div className='flex flex-row gap-6'>
                <span><span className="font-medium">Prep Time:</span> {prepTime}</span>
                <span><span className="font-medium">Cook Time:</span> {cookTime}</span>
                <span><span className="font-medium">Total Time:</span> {totalTime}</span>
              </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <i aria-hidden className='fa-solid fa-comment text-textColor' />
              <span>{numRating ? numRating : 0} reviews</span>
            </div>
          </div>
        </div>

        {/* tags */}
        <div className='flex flex-wrap gap-2'>
          {recipe.tags && recipe.tags.map((tag, index) => (
            <RecipeTag key={index} tag={tag} />
          ))}
        </div>

        <ReadOnlyTiptap content={recipe.about} />
      </div>

      <div className='flex flex-col md:flex-row gap-8 my-8'>
        {/* instructions */}
        <div className='max-md:order-last flex flex-col gap-0 w-full'>
          <h2 className=''>Instructions</h2>
          <hr className='border-1 border-primary mb-4' />
          {/* for recipe preview in create recipe page */}
          <div className='max-md:order-last flex flex-col gap-4 w-full'>
            {steps && steps.map((step, index) => (
              <Instruction key={index} step={index + 1} description={step} />
            ))}
            {/* for recipe page when user clicks on a recipe card */}
            {recipe.steps && recipe.steps.map((step, index) => (
              <Instruction key={index} step={index + 1} description={step} />
            ))}
          </div>
        </div>
                
        {/* ingredients */}
        <div className='flex flex-col gap-2 w-full md:w-[265px] p-4 md:p-8 h-fit bg-primary text-white'>
          <h2>Ingredients</h2>
          <p className='text-textColor'>Servings: {recipe.servings}</p>
          <hr className='border-1' />
          {ingrs.map((ingr, index) => (
            <Ingredient key={index} name={ingr.item} quantity={ingr.quantity + " " + (ingr.unit == "none" ? "" : ingr.unit)} />
          ))}
        </div>
      </div>

      
      {/* additional notes */}
      {recipe.notes && 
        <div className='mb-14'>
          <h2>Additional Notes</h2>
          <hr className='border-1 border-primary mb-4' />
          <ReadOnlyTiptap content={recipe.notes} />
        </div>
      }
    </div>
  )
}

export default RecipePage;