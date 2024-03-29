import { useEffect, useState } from 'react'

export interface ResponseApiGolang {
  paragraph: string
}

export default async function useGetInfo(): Promise<string[]> {
  const [state, setState] = useState('')

  useEffect(() => {
    const API_URL = new URL('http://localhost:8080')
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Opps Algo ha pasado')
        }
        return response.json()
      })
      .then((data: ResponseApiGolang) => {
        setState(data.paragraph)
      })
      .catch((error) => console.log(error))
  }, [])

  return [state]
}
