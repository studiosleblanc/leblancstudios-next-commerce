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
            <h3 className={s.navTitle}>WHITE SHIRT</h3>
            <ul>
              <li>NEW ARRIVALS</li>
              <li>GIFTS</li>
              <li>JACKETS AND COATS</li>
              <li>TOPS</li>
              <li>BOTOMS</li>
              <li>ACCESSORIES</li>
            </ul>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.navContainer}>
            <h3 className={s.navTitle}>TIMELESS DUCK SHIRT</h3>
            <ul>
              <li>NEW ARRIVALS</li>
              <li>GIFTS</li>
              <li>JACKETS AND COATS</li>
              <li>TOPS</li>
              <li>BOTOMS</li>
              <li>ACCESSORIES</li>
            </ul>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.navContainer}>
            <h3 className={s.navTitle}>SPECIAL PROJECTS</h3>
            <ul>
              <li>STO-DGO</li>
              <li>LBS + P.1991</li>
              <br />
              <li>THE PROWER OF SOUND</li>
              <li>FILM + ART DIRECTION</li>
            </ul>
          </div>
        </div>
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
