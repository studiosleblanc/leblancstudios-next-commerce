import React, { FC } from 'react'
import s from './Hero.module.css'
import Image from 'next/image'
import { Logo } from '@leblanc/svg'
import { Navbar } from '@leblanc/components/home'
import LogoDefault from '@leblanc/svg/logo-default'
import Hero2Img from 'public/assets/home/Hero-2.png'

const Hero: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.column}>
          <div className={s.navContainer}>
            <h3>WHITE SHIRT</h3>
            <ul>
              <li>NEW ARRIVALS</li>
              <li>GIFTS</li>
              <li>JACKETS AND COATS</li>
            </ul>
          </div>
        </div>
        <div className={s.column}>2</div>
        <div className={s.column}>3</div>
      </div>
      <div className={s.imageContainer}>
        <Image
          priority
          unoptimized
          src={Hero2Img}
          alt="Leblanc Studios"
          width={2879}
          height={2069}
          layout="responsive"
          objectFit="cover"
          // layout="fill"
        />
      </div>
    </div>
  )
}

export default Hero
