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
            <ul className={s.navItems}>
              <li>
                <a href="#">NEW ARRIVALS</a>
              </li>
              <li>
                <a href="#">GIFTS</a>
              </li>
              <li>
                <a href="#">JACKETS AND COATS</a>
              </li>
              <li>
                <a href="#">TOPS</a>
              </li>
              <li>
                <a href="#">BOTOMS</a>
              </li>
              <li>
                <a href="#">
                  ACCESSORIES <a href="#"></a>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.navContainer}>
            <h3 className={s.navTitle}>TIMELESS DUCK SHIRT</h3>
            <ul className={s.navItems}>
              <li>
                <a href="#">NEW ARRIVALS</a>
              </li>
              <li>
                <a href="#">GIFTS</a>
              </li>
              <li>
                <a href="#">JACKETS AND COATS</a>
              </li>
              <li>
                <a href="#">TOPS</a>
              </li>
              <li>
                <a href="#">BOTOMS</a>
              </li>
              <li>
                <a href="#">ACCESSORIES</a>
              </li>
              <br />
              <li>
                <a href="#">KIDS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.navContainer}>
            <h3 className={s.navTitle}>SPECIAL PROJECTS</h3>
            <ul className={s.navItems}>
              <li>
                <a href="#">STO-DGO</a>
              </li>
              <li>
                <a href="#">LBS + P.1991</a>
              </li>
              <br />
              <li>
                <a href="#">THE PROWER OF SOUND</a>
              </li>
              <li>
                <a href="#">FILM + ART DIRECTION</a>
              </li>
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
