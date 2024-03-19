import { type ResponseApiGolang } from '@/hooks/useGetInfo'
import ConnectionError from './Error/ConnectionError'

export default async function Paragraph() {
  try {
    const API_URL = new URL('http://localhost:8080')
    const res = await fetch(API_URL, {
      cache: 'no-store',
      headers: {
        Origin: 'http://localhost:3000',
      },
    })
    const p: ResponseApiGolang = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return <p>{p.response}</p>
  } catch (error) {
    console.log(error)

    return <ConnectionError />
  }
}
