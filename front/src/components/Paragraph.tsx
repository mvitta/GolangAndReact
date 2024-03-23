import { type ResponseApiGolang } from '@/hooks/useGetInfo'
import ConnectionError from './Error/ConnectionError'
import { formatGolangParagraph } from '@/utils/utils'

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
    const [paragraph, specialNote] = formatGolangParagraph(p.paragraph)

    //delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return (
      <>
        <h2 className='text-slate-600 mb-6 text-balance text-center font-bold text-xl'>
          Descripción
        </h2>
        <p className='mb-11 text-pretty'>{paragraph}</p>
        <p className='text-pretty font-semibold'>{specialNote}</p>
      </>
    )
  } catch (error) {
    console.log(error)
    return <ConnectionError />
  }
}
