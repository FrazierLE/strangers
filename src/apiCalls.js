const fetchData = () => {
  return fetch('https://localhost:3001/api/v1/strangers/')
    .then(res => res.json())
}

export default fetchData