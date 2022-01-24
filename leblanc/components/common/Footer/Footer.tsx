import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { LogoAfricanCaribeanPacific, LogoHorizontal } from '@leblanc/svg'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LBSFooter: FC<Props> = ({ pages }) => {
  // console.log(pages)
  return (
    <footer className={s.root}>
      <div className={s.imageContainer}>
        <Image
          unoptimized
          src="/assets/images/footer_img.jpg"
          alt="footer image"
          width={1139}
          height={1422}
          layout="responsive"
        />
      </div>
      <div className={s.content}>
        <div className={s.menuRow}>
          <div className={s.menu}>
            <ul>
              {/* <li>
                <a href="">Wholesale</a>
              </li> */}
              <li>
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
              {/* <li>
                <a href="">Shipping & Returns</a>
              </li> */}
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
            <ul>
              {/* <li>
                <a href="">Newsletter</a>
              </li> */}
              <li>
                <a href="http://sto-dgo.com/">Santo Domingo</a>
              </li>
              <li>
                <a href="/stores">Stores</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="mailto:info@leblancstudios.com">Contact Us</a>
              </li>
              <li>
                <a href="">WhatsApp Business</a>
              </li>
              <li>
                <a href="mailto:info@leblancstudios.com">E-Mail</a>
              </li>
            </ul>
            <ul className={s.social}>
              <li>
                <a
                  href="https://open.spotify.com/user/la1my6jfhjhxpbqhk2xdxb5vk?si=6VrMFCCKRNOqvlLh75MFyA"
                  target="_blank">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/LEBLANCSTUDIOS/">Instagram</a>
              </li>
              <li>
                <a href="https://youtube.com/channel/UCpfWlAx9UUJqwZHdij-ybhA">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          {/* <I18nWidget /> */}
          <div className={s.logoLBSContainer}>
            <LogoHorizontal className={s.logoLBS} />
          </div>
        </div>
        <div className={s.copyRow}>
          <div className={s.copy}>
            <p>DESIGNED BY LEBLANCSTUDIOS, COPYRIGHT RESERVED 2021</p>
            <LogoAfricanCaribeanPacific className={s.acpLogo} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LBSFooter
