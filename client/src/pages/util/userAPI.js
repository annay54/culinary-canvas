export async function postRegister(userData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userData})
  })

  const userInfo = await res.json()
  console.log(userInfo)

  return userInfo
}

export async function getUserByEmail(userData) {
  console.log("NEXT_PUBLIC_API_URL is ", process.env.NEXT_PUBLIC_API_URL)
  console.log("userData is ", userData)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userData})
  })

  const userInfo = await res.json()
  console.log(userInfo)

  return userInfo
}
