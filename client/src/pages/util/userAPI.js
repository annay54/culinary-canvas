const USERS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/users`

export async function postRegister(userData) {
  const res = await fetch(`${USERS_API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userData})
  }).catch(error => {
    console.error("There is a problem with fetching", error)
  })

  const message = await res.json()

  return message
}

export async function getUserByEmail(userData) {
  const res = await fetch(`${USERS_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userData})
  })

  const userInfo = await res.json()
  if (userInfo.error) {
    return null
  }

  return userInfo
}

export async function getUserInfo(id) {
  // param "value" in the fetch url is an user id
  const res = await fetch(`${USERS_API_URL}/info?value=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const user = await res.json()
  return user
}

export async function getFavRecipes(id, page, numRecipes) {
  const res = await fetch(`${USERS_API_URL}/fav-recipes?value=${id}&page=${page}&numRecipes=${numRecipes}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const recipes = await res.json()
  return recipes
}