'use client'

import Image from 'next/image'
import useGetInfo from '@/hooks/useGetInfo'
import Header from '@/components/Header'

export default function Home() {
  const [paragraph] = useGetInfo()

  return (
    <main className=''>
      <Header />
      <h1>Application</h1>
      <hr />
      <p>{paragraph}</p>
      <hr />
      <div className='box'></div>
      <hr />
    </main>
  )
}
