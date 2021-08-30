import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { LogoAfricanCaribeanPacific, LogoHorizontal } from '@components/svg'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LBSFooter: FC<Props> = () => {
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
              <li>
                <a href="">Wholesale</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Santo Domingo</a>
              </li>
              <li>
                <a href="">Stores</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">WhatsApp Business</a>
              </li>
              <li>
                <a href="">E-Mail</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
              <li>
                <a href="">Twitter</a>
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
