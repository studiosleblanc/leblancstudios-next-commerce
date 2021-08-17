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
import { I18nWidget } from '@components/common'
import s from './LBSFooter.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

// const links = [
//   {
//     name: 'Home',
//     url: '/',
//   },
// ]

const LBSFooter: FC<Props> = ({ pages }) => {
  // const { sitePages } = usePages(pages)

  return (
    <footer className={s.root}>
      {/* {[...links, ...sitePages].map(page => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))} */}
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

// function usePages(pages?: Page[]) {
//   const { locale } = useRouter()
//   const sitePages: Page[] = []

//   if (pages) {
//     pages.forEach((page) => {
//       const slug = page.url && getSlug(page.url)
//       if (!slug) return
//       if (locale && !slug.startsWith(`${locale}/`)) return
//       sitePages.push(page)
//     })
//   }

//   return {
//     sitePages: sitePages.sort(bySortOrder),
//   }
// }

// Sort pages by the sort order assigned in the BC dashboard
// function bySortOrder(a: Page, b: Page) {
//   return (a.sort_order ?? 0) - (b.sort_order ?? 0)
// }

export default LBSFooter
