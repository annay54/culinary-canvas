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

export async function addDeleteFavRecipe(id, uid, isFav) {
  let res;
  if (isFav) {
    res = await fetch(`${FAVRECIPES_API_URL}/delete?id=${id}&user=${uid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
  else {
    res = await fetch(`${FAVRECIPES_API_URL}/add?id=${id}&user=${uid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
  

  return await res.json();
}