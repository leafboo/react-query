import { useQuery } from "react-query"

export default function Example() {
  async function getData() {
    const res = await fetch(`https://api.github.com/repos/tannerlinsley/react-query`)
    return res.json()
  }
  const { isLoading, data } = useQuery('artistData', getData)

  if ( isLoading ){
    return <p>Loading...</p>
  }
  console.log(data)
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}