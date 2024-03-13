'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()

  return (
    <section>
      <nav className='border-b font-bold text-slate-500 text-lg'>
        <ul className='flex justify-center gap-4 my-4'>
          <li>
            <Link
              href='/'
              className={pathname === '/' ? 'text-app-color underline' : ''}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href='/wallpapers'
              className={
                pathname === '/wallpapers' ? 'text-app-color underline' : ''
              }
            >
              Imagenes
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
