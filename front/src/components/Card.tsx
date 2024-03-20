import Img from './Img'
import { convertURLtoNameUser } from '@/utils/utils'
interface PropsCard {
  id: string
  by: string
  image: string
  source: string
  download: string | undefined
}

export default function Card({ id, by, image, download, source }: PropsCard) {
  return (
    <article
      key={id}
      className='h-auto border p-2 min-w-[208px] grid grid-cols-1 gap-4 bg-slate-100'
    >
      <section className='w-full h-auto py-2 bg-slate-700 text-center font-semibold text-white'>
        {source}
      </section>
      <Img alt={by} src={image} />
      <div className='break-words'>
        <span className='font-bold text-slate-800'>Por</span>{' '}
        <span className='uppercase text-app-color'>
          {convertURLtoNameUser(by)}
        </span>
      </div>
      <a
        href={image}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:text-blue-400'
        title='ver imagen en una pestaña nueva'
      >
        Link de Imagen Original
      </a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        facilis, nam repellendus beatae sapiente impedit debitis tempora, ut
        ipsam dolorum esse molestiae mollitia expedita quam veniam ad dicta id.
        Non!
      </p>
      <a
        title='Descargar'
        href={download}
        className='bg-app-color max-w-max h-10 px-3 mx-auto py-2 place-self-end rounded text-white hover:text-app-color hover:bg-slate-100 hover:border hover:border-app-color'
      >
        Descargar Imagen
      </a>
    </article>
  )
}
