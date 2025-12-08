export async function getAllRecipes(page, numRecipes) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/all?page=${page}&numRecipes=${numRecipes}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const recipes = await res.json()
  return recipes
}

export async function getAllTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const tags = await res.json()
  return tags
}