import IconGo from '@/icons/IconGo'

export default function Header() {
  return (
    <section className='relative w-full border-none bg-slate-600 flex flex-wrap justify-between content-center items-center justify-items-end z-10 shadow-[2px_0_20px_3px_rgba(0, 0, 0)]'>
      <div className='px-4 flex justify-center items-center font-extrabold'>
        <span className='text-app-color section-left-header'>
          ReactJS and Golang
        </span>
      </div>
      <div className='transition ease-out duration-1000 delay-100 hover:scale-110 px-4'>
        <a href='http://go.dev' target='_blank' rel='noopener noreferrer'>
          <IconGo w={64} h={64} />
        </a>
      </div>
    </section>
  )
}
