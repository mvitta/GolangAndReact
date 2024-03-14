import React from 'react'

export default function WallpapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-11/12 mx-auto'>
      <h1>Api Free Wallpapers</h1>
      <p className='parag'>
        Api free wallpapers es una API que facilita 20 imágenes con diferente
        aspecto ratio, y con diferentes pathname, la estamos utilizando para
        probar el componente Image de NextJS y la optimización de imágenes
      </p>
      <hr />
      {children}
    </div>
  )
}
