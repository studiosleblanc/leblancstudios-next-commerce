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
      <div className={s.content}>
        <div className={s.menuRow}>
          <div className={s.menu}>
            <ul>
              {/* <li>
                <a href="">Wholesale</a>
              </li> */}
              <li>
                <Link href="/">
                  <a>Wholesales</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/returns">
                  <a>Return</a>
                </Link>
              </li>
              <li>
                <Link href="/shipping">
                  <a>Shipping</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/newsletter">Newsletter</a>
              </li>
              <li>
                <a href="http://sto-dgo.com/" target="_blank">
                  Santo Domingo
                </a>
              </li>
              <li>
                <Link href="/stores">
                  <a>Stores</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/newsletter">
                  <a>Newsletter</a>
                </Link>
              </li> */}
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
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/LEBLANCSTUDIOS/">Instagram</a>
              </li>
              <li>
                <a href="https://youtube.com/channel/UCpfWlAx9UUJqwZHdij-ybhA">
                  Youtube
                </a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
          {/* <I18nWidget /> */}
        </div>
        <div className={s.copyRow}>
          <div className={s.copy}>
            <p>DEVELOPED BY LEBLANCSTUDIOS, COPYRIGHT RESERVED.</p>
            <p>LEBLANCFOUNDATION</p>
            <p>AFRICAN-CARIBBEAN-PACIFIC</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LBSFooter
