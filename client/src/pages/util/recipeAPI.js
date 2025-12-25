export async function getAllRecipes(filter) {
  const tagParams = new URLSearchParams();
  // first item is a placeholder to ensure tags is always passed as an array
  // resolves problem of "tags" being a string when "tag" has only 1 item
  tagParams.append("tags", "tags")
  filter.tags.forEach(tag => {
    tagParams.append("tags", tag)
  });
  console.log(tagParams.toString())
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/all?page=${filter.page}&numRecipes=${filter.numRecipes}&min=${filter.min}&max=${filter.max}&${tagParams.toString()}&sortBy=${filter.sortBy}&sortOrder=${filter.sortOrder}`, {
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