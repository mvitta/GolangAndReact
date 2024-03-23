import { technologiesData } from '@/components/technologies/technologiesData'
import TechnologieCard from '@/components/technologies/TechnologieCard'

export default function Technologies() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-12 md:mx-24 mb-20 gap-x-8 gap-y-14'>
      {technologiesData.map((technologie) => {
        const { icon, id, paragraphs, title, list, url } = technologie
        return (
          <TechnologieCard
            key={id}
            icon={icon}
            paragraphs={paragraphs}
            title={title}
            list={list}
            url={url}
          />
        )
      })}
    </section>
  )
}
