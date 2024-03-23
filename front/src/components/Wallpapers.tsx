import { ResponseAPIImages } from '@/hooks/useGetImages'
import response from '@/data/data.json'
import styles from '@/components/Wallpapers.module.css'
import ImagesLoading from './ImagesLoading'
import WallpapersError from './Error/WallpapersError'
import Card from './Card'
import ConnectionError from './Error/ConnectionError'

export default async function Wallpapers() {
  try {
    let images: ResponseAPIImages = {
      results: [],
    }
    // let error_request: string = ''
    // const response = await fetch('http://localhost:8080/images', {
    //   cache: 'no-store',
    //   headers: {
    //     Origin: 'http://localhost:3000',
    //   },
    // })
    // if (response.status === 200) {
    //   images = await response.json()
    // } else {
    //   error_request = await response.text()
    // }

    images = response
    return (
      <>
        {/* <ImagesLoading /> */}
        {images.results.length > 0 ? (
          //los estilos de la grilla son manejados con css modules
          <div className={`${styles.containerGrid} mx-auto my-4`}>
            {images.results.map((img) => {
              const { by, image, id, source, download } = img
              return (
                <Card
                  id={id}
                  by={by}
                  image={image}
                  key={id}
                  source={source}
                  download={download}
                />
              )
            })}
          </div>
        ) : (
          ''
          // <WallpapersError response={response} error_request={error_request} />
        )}
      </>
    )
  } catch (error) {
    return <ConnectionError />
  }
}
