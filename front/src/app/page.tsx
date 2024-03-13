'use client'

import dynamic from 'next/dynamic'

const ParagraphNoSSR = dynamic(() => import('@/components/Paragraph'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <h1>Application</h1>
      <ParagraphNoSSR />
    </>
  )
}
//
