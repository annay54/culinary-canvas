const RECIPES_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/recipes`

export async function getAllRecipes(search, filter) {
  const tagParams = new URLSearchParams();
  // first item is a placeholder to ensure tags is always passed as an array
  // resolves problem of "tags" being a string when "tag" has only 1 item
  tagParams.append("tags", "tags")
  filter.tags.forEach(tag => {
    tagParams.append("tags", tag)
  });
  const res = await fetch(`${RECIPES_API_URL}/all?page=${filter.page}&numRecipes=${filter.numRecipes}&search=${search}&min=${filter.min}&max=${filter.max}&${tagParams.toString()}&sortBy=${filter.sortBy}&sortOrder=${filter.sortOrder}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json();
}

export async function getRecipeById(id) {
  const res = await fetch(`${RECIPES_API_URL}/info?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json();
}

export async function getUserRecipes(email, page, numRecipes) {
  const res = await fetch(`${RECIPES_API_URL}/user-created?value=${email}&page=${page}&numRecipes=${numRecipes}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const recipes = await res.json()
  return recipes
}

export async function getRecipeReviews(id, page, numReviews) {
  const res = await fetch(`${RECIPES_API_URL}/reviews?id=${id}&page=${page}&numReviews=${numReviews}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json();
}

export async function postRecipe(recipe, steps, ingrs) {
  const res = await fetch(`${RECIPES_API_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({recipe, steps, ingrs})
  })

  const result = await res.json();
  console.log("result", result)

  return result;
}

export async function getAllTags() {
  const res = await fetch(`${RECIPES_API_URL}/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json()
}