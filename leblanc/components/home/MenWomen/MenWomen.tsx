import React, { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'
import s from './MenWomen.module.css'
import { Tooltip } from '@leblanc/components/ui'

const MenWomen: FC = () => {
  const [menLoaded, setMenLoaded] = useState(false)
  const [womenLoaded, setWomenLoaded] = useState(false)
  return (
    <div className={s.root}>
      <div className={s.column}>
        <Link href="/product/black-lissajous-shirt">
          <a className={s.card}>
            <Image
              priority
              unoptimized
              src="/assets/home/men.png"
              alt="Leblanc Studios"
              width={963}
              height={1443}
              layout="responsive"
              className={s.image}
              placeholder="empty"
              onLoadingComplete={() => setMenLoaded(true)}
            />
            <div className={s.cardContent}>
              <div className={s.cardHeader}>
                <div className={s.headerCaption}>
                  FW22: <b>[No Medium Inserted]</b>
                </div>
              </div>
              <div className={s.cardFooter}>
                <div className={s.footerCaption}>MENS</div>
              </div>

             
            </div>
          </a>
        </Link>
      </div>
      <div className={s.column}>
        <Link href="/product/grey-longrace-duck-shirt">
          <a className={s.card}>
            <Image
              priority
              unoptimized
              src="/assets/home/women.png"
              alt="Leblanc Studios"
              width={964}
              height={1440}
              layout="responsive"
              className={s.image}
              placeholder="empty"
              onLoadingComplete={() => setWomenLoaded(true)}
            />
            <div className={s.cardContent}>
              <div className={s.cardHeader}>
                <div className={s.headerCaption}>
                  FW22: <b>[No Medium Inserted]</b>
                </div>
              </div>
              <div className={s.cardFooter}>
                <div className={s.footerCaption}>WOMENS</div>
              </div>

            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MenWomen
