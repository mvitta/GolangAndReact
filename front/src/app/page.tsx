'use client'

import Image from 'next/image'
import useGetInfo from '@/hooks/useGetInfo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [paragraph] = useGetInfo()

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <h1>Application</h1>
        <p className='paragraph'>{paragraph}</p>
      </main>
      <Footer />
    </>
  )
}
//
