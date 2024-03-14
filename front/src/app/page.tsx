import Paragraph from '@/components/Paragraph'
import { Suspense } from 'react'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <>
      <h1>Application</h1>
      <Suspense fallback={<div>Cargando Parrafo</div>}>
        <Paragraph />
      </Suspense>
    </>
  )
}
