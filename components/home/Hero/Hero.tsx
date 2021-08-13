import React, { FC } from 'react'
import s from './Hero.module.css'
import Image from 'next/image'
import { Logo } from '@components/svg'

const Hero: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.heroContent}>
        <Logo className={s.logo} />
      </div>
      <div className={s.imageContainer}>
        <Image
          quality="85"
          src="/assets/home/banner-1.jpg"
          alt="Leblanc Studios"
          width={1920}
          height={1446}
          layout="responsive"
          // objectFit="cover"
          // layout="fill"
        />
      </div>
    </div>
  )
}

export default Hero
