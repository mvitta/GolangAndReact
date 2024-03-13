import useGetInfo from '@/hooks/useGetInfo'
import { Suspense } from 'react'

export default function Paragraph() {
  const paragraph = useGetInfo()
  return (
    <Suspense fallback={'Loading ...'}>
      <p className='parag'>{paragraph}</p>
    </Suspense>
  )
}
