import React from "react";
import RecipeTag from "./RecipeTag";
import { Avatar } from "@nextui-org/avatar";
import { useSession } from "next-auth/react";
import { isFavRecipe, addDeleteFavRecipe } from "@/pages/util/favRecipeAPI";

const RecipePage = ({ recipe, ingrs, authorImg, numRating }) => {
  const { data: session } = useSession()
  const [isFav, setIsFav] = React.useState(false);

  React.useEffect(() => {
    if (session) {
      isFavRecipe(recipe.recid, session.user.id).then((res) => {
        setIsFav(res);
      })
    }
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

      {/* Show favourite button when user is logged in */}
      {session && (
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
              <span>20 minutes</span>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <i aria-hidden className='fa-solid fa-comment text-textColor' />
              <span>30 reviews</span>
            </div>
          </div>
        </div>

        {/* tags */}
        <div className='flex flex-wrap gap-2'>
          {recipe.tags.map((tag, index) => (
            <RecipeTag key={index} tag={tag} />
          ))}
        </div>

        <p>{recipe.about}</p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 my-8'>
        {/* instructions */}
        <div className='max-md:order-last flex flex-col gap-4 w-full'>
          <h2 className=''>Instructions</h2>
          {recipe.steps.map((step, index) => (
            <Instruction key={index} step={index + 1} description={step} />
          ))}
        </div>
                
        {/* ingredients */}
        <div className='flex flex-col gap-2 w-full md:w-[265px] p-4 md:p-8 h-fit bg-primary text-white'>
          <h2>Ingredients</h2>
          <p className='text-textColor'>Servings: {recipe.servings}</p>
          <hr className='border-1' />
          {ingrs.map((ingr, index) => (
            <Ingredient key={index} name={ingr.item} quantity={ingr.quantity + " " + ingr.unit} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipePage;