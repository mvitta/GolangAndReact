import { Tech } from '@/components/technologies/technologiesData'
import ListItem from '@/components/ListItem'

type PropsTechnologies = Omit<Tech, 'id'>

export default function technologieCard(tech: PropsTechnologies) {
  const { paragraphs, title, icon, list, url } = tech

  return (
    <div className='shadow-md hover:shadow-2xl p-2 transition-shadow ease-out delay-100'>
      <div className='flex mb-10 items-center justify-start'>{icon}</div>
      <h2>{title}</h2>
      <div className='mb-8'>
        <a
          className='text-blue-600 hover:text-blue-400'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {url}
        </a>
      </div>
      {paragraphs.map((paragraph) => (
        <p key={crypto.randomUUID()} className='mb-7'>
          {paragraph}
        </p>
      ))}
      {list && <ListItem list={list} />}
    </div>
  )
}
