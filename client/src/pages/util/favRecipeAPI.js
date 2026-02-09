const FAVRECIPES_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/favRecipes`

export async function getFavRecipes(id, page, numRecipes) {
  const res = await fetch(`${FAVRECIPES_API_URL}/user-fav?value=${id}&page=${page}&numRecipes=${numRecipes}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const recipes = await res.json()
  return recipes
}

export async function isFavRecipe(id, uid) {
  const res = await fetch(`${FAVRECIPES_API_URL}/isFav?id=${id}&user=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json();
}