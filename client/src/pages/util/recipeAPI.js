export async function getAllRecipes(filter) {
  console.log("new filter ", filter.splice(2))
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/all?page=${filter[0]}&numRecipes=${filter[1]}&filter=${filter.splice(2)}`, {
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