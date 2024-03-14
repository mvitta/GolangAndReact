import Img from './Img'
import response from '@/data/data.json'
import styles from '@/components/Wallpapers.module.css'

export default async function Wallpapers() {
  // const response = await fetch('http://localhost:8080/images', {
  //   cache: 'no-store',
  //   headers: {
  //     Origin: 'http://localhost:3000',
  //   },
  // })

  // const images: ResponseAPIImages = await response.json()

  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  return (
    <>
      <div className={`${styles.containerGrid} mx-auto my-4`}>
        {response.results.map((img) => {
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
    </>
  )
}
