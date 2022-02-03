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
              src="/assets/home/mens.jpg"
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
                  ss22: <b>[No Medium Inserted]</b>
                </div>
              </div>
              <div className={s.cardFooter}>
                <div className={s.footerCaption}>MENS</div>
              </div>

              <Tooltip
                appear={menLoaded}
                top="34%"
                left="11%"
                width="20.6%"
                className={s.tooltip}
                text="Shirt [NMI]"
              />
              <Tooltip
                appear={menLoaded}
                bottom="30%"
                right="15%"
                align="right"
                width="23.5%"
                className={s.tooltip}
                text="Trousers [NMI]"
              />
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
              src="/assets/home/womens.jpg"
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
                  <b>[Timeless Duck Shirt: Intimo y Personal]</b>
                </div>
              </div>
              <div className={s.cardFooter}>
                <div className={s.footerCaption}>WOMENS</div>
              </div>

              <Tooltip
                appear={womenLoaded}
                top="8%"
                right="17%"
                align="right"
                width="23%"
                className={s.tooltip}
                text="Bucket Hat [TDS]"
              />
              <Tooltip
                appear={womenLoaded}
                top="36%"
                left="11%"
                width="26.5%"
                className={s.tooltip}
                text="Shirt Jacket [TDS]"
              />
              <Tooltip
                appear={womenLoaded}
                bottom="29%"
                right="7%"
                align="right"
                width="23.5%"
                className={s.tooltip}
                text="Skirt [TDS]"
              />
              <Tooltip
                appear={womenLoaded}
                bottom="25.5%"
                left="2.5%"
                width="26%"
                className={s.tooltip}
                text="Tote Bag [FMP]"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MenWomen
