export async function getAllRecipes(filter) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/all?page=${filter.page}&numRecipes=${filter.numRecipes}&min=${filter.min}&max=${filter.max}&tags=${filter.tags}&sortBy=${filter.sortBy}&sortOrder=${filter.sortOrder}`, {
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