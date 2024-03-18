import { ResponseAPIImages } from '@/hooks/useGetImages'
import Img from './Img'
// import response from '@/data/data.json'
import styles from '@/components/Wallpapers.module.css'
import ImagesLoading from './ImagesLoading'

export default async function Wallpapers() {
  let images: ResponseAPIImages = {
    results: [],
  }
  let error_request: string = ''

  const response = await fetch('http://localhost:8080/images', {
    cache: 'no-store',
    headers: {
      Origin: 'http://localhost:3000',
    },
  })

  if (response.status === 200) {
    images = await response.json()
  } else {
    error_request = await response.text()
  }

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000)
  // })

  return (
    <>
      {/* <ImagesLoading /> */}
      {images.results.length > 0 ? (
        <div className={`${styles.containerGrid} mx-auto my-4`}>
          {images.results.map((img) => {
            const { by, image, id, source, diffrentSizes } = img
            return (
              <article key={id} className='h-auto'>
                <Img alt={by} src={image} />
                <a href={image} target='_blank' rel='noopener noreferrer'>
                  Imagen Original
                </a>
                <details open>
                  <summary>Descripcion de la Imagen </summary>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias facilis, nam repellendus beatae sapiente impedit
                    debitis tempora, ut ipsam dolorum esse molestiae mollitia
                    expedita quam veniam ad dicta id. Non!
                  </p>
                </details>
              </article>
            )
          })}
        </div>
      ) : (
        <div className='text-center'>
          <h3 className='text-red-700 uppercase'>
            No se puedieron cargar las targetas, por favor probar en unos
            minutos
          </h3>
          <h4> {response.statusText}</h4>
          <br />
          <p>{`${error_request} - `}</p>
          <span className='font-bold underline underline-offset-4'>{`Status: ${response.status}`}</span>
          <hr />
          <p>
            los errores no se deben mandar al client, el objetivo es comprobar
            como llegan los argumentos que se pasan en
            <span className='bg-slate-800 text-white p-1'>
              http.Error(w, errGetImages.Error(),
              http.StatusInternalServerError)
            </span>
            en la ruta /images del servidor de golang
          </p>
        </div>
      )}
    </>
  )
}
