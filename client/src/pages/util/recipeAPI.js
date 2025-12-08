export async function getAllRecipes(page, numRecipes) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/all?page=${page}&numRecipes=${numRecipes}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const recipes = await res.json()

  console.log(recipes)

  return recipes.recipes
}

export async function getAllTags() {
  
}