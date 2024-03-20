'use client'

import Image from 'next/image'
import styles from '@/components/Img.module.css'

interface PropsImage {
  src: string
  alt: string
}

export default function Img({ alt, src }: PropsImage) {
  return (
    <div className={styles.containerImage}>
      <Image
        className='opacity-65 hover:opacity-100'
        priority
        sizes='200px'
        src={src}
        alt={alt}
        onLoad={(e) => {
          e.currentTarget.naturalWidth
        }}
        fill
        style={{ maskImage: 'linear-gradient(black 90%, transparent 100%)' }}
      />
    </div>
  )
}
