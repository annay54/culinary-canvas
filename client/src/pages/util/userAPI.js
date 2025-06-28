export async function postRegister(userData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userData})
  })

  const userInfo = await res.json()
  console.log("returned user is ", userInfo)

  return userInfo
}
