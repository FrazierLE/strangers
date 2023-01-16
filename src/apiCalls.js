const fetchData = () => {
  // return fetch('http://localhost:3001/api/v1/strangers/')
  return fetch('https://strangers-api-lhr3.vercel.app/api/v1/strangers/')
    .then(res => res.json())
}

export default fetchData