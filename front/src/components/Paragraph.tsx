import useGetInfo from '@/hooks/useGetInfo'
import { Suspense } from 'react'

export default async function Paragraph() {
  const API_URL = new URL('http://localhost:8080')
  const response = await fetch(API_URL)
  const p = await response.text()
  console.log(p)

  return (
    <Suspense fallback={'Loading ...'}>
      {/* <p className='parag'>{p.response}</p> */}
    </Suspense>
  )
}
