import Title from '@/components/Title'
import IconImage from '@/icons/IconImage'
import React from 'react'

export default function WallpapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>
        <Title contentTitle='Api Free Wallpaper' />
      </section>
      <article className='w-full columns-1 sm:columns-2 text-pretty mb-4'>
        {/* <IconImage /> */}
        <p className='px-2 mb-4 sm:mb-0 sm:border-r-2'>
          <span className='text-app-color font-bold font'>
            Api free wallpapers
          </span>{' '}
          es una API que facilita 20 imágenes con diferente aspecto ratio, y con
          diferentes pathname, se utilizan para probar el componente Image de
          NextJS y la optimización de imágenes
        </p>
        <p className='px-2'>
          El creador de esta grandiosa API es ruamazi, la puede encontrar en{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href='https://rapidapi.com/ruamazi/api/free-images-api/details'
            target='_blank'
            rel='noopener noreferrer'
            title='ir a rapidapi'
          >
            https://rapidapi.com/ruamazi/api/free-images-api/details
          </a>
        </p>
      </article>
      <p className='px-2'>
        <span className='font-bold'>Nota: </span> se utilizan columnas para
        probar el responsive de la pagina
      </p>
      <hr />
      {children}
    </>
  )
}
