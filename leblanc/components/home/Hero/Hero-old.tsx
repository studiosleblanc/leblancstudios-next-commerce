import React, { FC } from 'react'
import s from './Hero.module.css'
import Image from 'next/image'
import { Logo } from '@leblanc/svg'
import { Navbar } from '@leblanc/components/home'
import LogoDefault from '@leblanc/svg/logo-default'

const Hero: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <LogoDefault />
        <div className={s.nav}>{/* <Navbar /> */}</div>
      </div>
      <div className={s.imageContainer}>
        <Image
          priority
          unoptimized
          src="/assets/home/hero.png"
          alt="Leblanc Studios"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          // layout="fill"
        />
      </div>
    </div>
  )
}

export default Hero
