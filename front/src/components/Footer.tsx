import { socialMedia } from '@/icons/socialMedia'

export default function Footer() {
  return (
    <footer className='w-full h-32 border-t border-double bg-slate-300 border-t-app-color border'>
      <section className=''></section>
      <section>
        <div className='flex justify-center items-center gap-3'>
          {socialMedia.map((Icon) => {
            const { ComponentIcon, url } = Icon
            return (
              <a
                href={url}
                key={crypto.randomUUID()}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ComponentIcon w='40' h='40' className='my-4' />
              </a>
            )
          })}
        </div>
        <div>
          <p className='p-style text-center'>
            &#169; Copyright 2024 Mike Vitta
          </p>
        </div>
      </section>
    </footer>
  )
}
