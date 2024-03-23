import Paragraph from '@/components/Paragraph'
import { IconNextJS } from '@/icons/IconNextJS'
import { IconReactJS } from '@/icons/IconReactJS'
import { IconTailwind } from '@/icons/IconTailwind'
import IconGo from '@/icons/IconGo'
import { Suspense } from 'react'
import MainTitle from '@/components/MainTitle'
import Technologies from '@/components/technologies/Technologies'
import { backgroundTop } from '@/backgrounds/backgroundTop'
import { backgroundBottom } from '@/backgrounds/backgroundBottom'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <section className='min-h-screen h-auto relative p-2 text-black'>
        <div className='absolute right-0 top-0 z-[-1] opacity-20'>
          {backgroundTop}
        </div>
        <div className='absolute bottom-0 left-0 z-[-1] opacity-20'>
          {backgroundBottom}
        </div>
        <div className='mx-6 md:mx-28 lg:mx-48 2xl:mx-64 '>
          <MainTitle />
          <Suspense fallback={'cargando parrafo'}>
            <Paragraph />
          </Suspense>
        </div>
        <div className='grid grid-cols-2 justify-items-center sm:flex sm:flex-row  sm:justify-center my-12'>
          <IconTailwind />
          <IconReactJS />
          <IconNextJS />
          <IconGo w={80} h={80} />
        </div>

        <div className='flex flex-row mx-6 space-x-4 justify-center'>
          <a
            className='bg-slate-700 text-white py-3 px-5'
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            Empezar
          </a>
          <a
            className='bg-gray-600 text-white py-3 px-5'
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </section>
      <br />
      <Technologies />
    </>
  )
}
