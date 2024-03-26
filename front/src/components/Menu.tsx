'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import IconHome from '@/icons/menu/Home'
import IconWallpapers from '@/icons/menu/Wallpapers'
import IconForm from '@/icons/menu/IconForm'
import styles from '@/components/Menu.module.css'
import { type IconProps, MenuOptions } from '@/types.d.ts/definitions'

export default function Menu() {
  const pathname = usePathname()

  const options: MenuOptions[] = [
    {
      href: '/',
      text: 'Inicio',
      icon: IconHome,
    },
    {
      href: '/wallpapers',
      text: 'Wallpapers',
      icon: IconWallpapers,
    },
    {
      href: '/form',
      text: 'Formularios',
      icon: IconForm,
    },
  ]

  return (
    <section className='relative border-none bg-slate-700 min-h-1/2 py-1 z-10'>
      <nav className='font-bold text-white text-lg'>
        <ul className='flex flex-wrap justify-center justify-items-center gap-4'>
          {options.map((item, index) => {
            const { icon, href, text } = item
            const Icon = icon
            return (
              <li key={index} className={`${styles.menuItem} h-auto`}>
                <Link
                  href={href}
                  className={`flex flex-col items-center ${
                    pathname === href ? 'underline underline-offset-2' : ''
                  }`}
                >
                  <Icon fill='currentColor' />
                  <div>{text}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}
