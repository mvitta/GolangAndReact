import { socialMedia } from '@/icons/socialMedia'

export default function Footer() {
  return (
    <footer className='w-full h-auto border-t border-double bg-slate-300 border-t-app-color border'>
      <section className='w-11/12 flex flex-col my-0 mx-auto'>
        <section className='flex flex-row my-4'>
          <div className='p-2'>
            <p className='break-words'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem mollitia non eveniet! Doloribus ea cum odit omnis
              dolore! Libero quod expedita odio error iure porro, praesentium
              labore maxime amet saepe.
            </p>
          </div>
          <div className='p-2'>
            <p className='break-words'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              nesciunt adipisci libero, ipsa vitae eius minima neque placeat
              quae odit magnam, in quia laboriosam, reiciendis facilis! Ipsam
              necessitatibus nostrum culpa?
            </p>
          </div>
        </section>
        <hr />
        <section>
          <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
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
      </section>
    </footer>
  )
}
