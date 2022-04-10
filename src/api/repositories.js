//http://jsonplaceholder.typicode.com/users
const fetchUserRepositories = () => {
  return fetch('http://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json()
  })
}

export  {
  fetchUserRepositories
}