import useGetImages, { Result } from '@/hooks/useGetImages'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Images() {
  const [images, setImages] = useState<Result[]>()
  const Promise = useGetImages()

  useEffect(() => {
    Promise.then((res) => {
      setImages(res?.results)
    })
  }, [Promise])

  return (
    <div className='flex gap-2 flex-wrap mx-auto my-4 justify-center'>
      {images?.map((img) => {
        const { by, image, id, source } = img
        return <Image alt={by} src={image} key={id} width={200} height={200} />
      })}
    </div>
  )
}
