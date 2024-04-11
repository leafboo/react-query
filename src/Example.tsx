import { useQuery } from "react-query"

export default function Example() {
  async function getData() {
    const res = await fetch(`htps://api.github.com/repos/tannerlinsley/react-query12`)
    return res.json()
  }
  const { isLoading, data, error } = useQuery('artistData', getData)

  
  if ( isLoading ){
    return <h1>Loading...</h1>
  }
  
  if (error || (error as Error)?.message === 'Not Found') {
    console.log('fUCK YOU')
    return <h1>{(error as Error)?.message}</h1>
  }

  

  console.log(data)
  
}