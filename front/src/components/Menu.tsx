'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import IconHome from '@/icons/menu/Home'
import IconWallpapers from '@/icons/menu/Wallpapers'
import styles from '@/components/Menu.module.css'

export default function Menu() {
  const pathname = usePathname()
  const menuOptions = [
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
  ]

  return (
    <section>
      <nav className='border-b font-bold text-slate-500 text-lg'>
        <ul className='flex justify-center gap-4 my-1'>
          {menuOptions.map((item, index) => {
            const { icon, href, text } = item
            const Icon = icon
            return (
              <li key={index} className={styles.menuItem}>
                <Link
                  href={href}
                  className={`${
                    pathname === href ? 'text-app-color underline' : ''
                  }`}
                >
                  <Icon />
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
