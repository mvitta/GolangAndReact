import IconGo from '@/icons/IconGo'

export default function Header() {
  return (
    <section className='bg-slate-600 flex flex-wrap w-full justify-between content-center'>
      <div className='px-4 flex justify-center items-center font-extrabold'>
        <span className='text-app-color'>ReactJS and Golang</span>
      </div>
      <div className='transition ease-out duration-1000 delay-100 hover:scale-110 px-4'>
        <a href='http://go.dev' target='_blank' rel='noopener noreferrer'>
          <IconGo w={64} h={64} />
        </a>
      </div>
    </section>
  )
}
