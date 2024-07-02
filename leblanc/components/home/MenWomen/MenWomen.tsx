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
        <Link href="product/black-crisis-t-shirt">
          <a className={s.card}>
            <Image
              priority
              unoptimized
              src="/assets/home/black-crisis-t-shirt.png"
              alt="Leblanc Studios"
              width={1920}
              height={2560}
              layout="responsive"
              className={s.image}
              placeholder="empty"
              onLoadingComplete={() => setWomenLoaded(true)}
            />
            <div className={s.cardContent}>
              <div className={s.cardHeader}>
                <div className={s.headerCaption}>
                  <b> NEW ARRIVAL: BLACK CRISIS T-SHIRT</b>
                </div>
              </div>
              {/* <div className={s.cardFooter}>
                <div className={s.footerCaption}>
                  <span>
                    Photographed by Ales Constantino
                    <br />
                    Modeled by kat
                  </span>
                </div>
              </div> */}
            </div>
          </a>
        </Link>
      </div>
      <div className={s.column}>
        <Link href="product/crisis-t-shirt">
          <a className={s.card}>
            <Image
              priority
              unoptimized
              src="/assets/home/crisis-t-shirt.png"
              alt="Leblanc Studios"
              width={1920}
              height={2560}
              layout="responsive"
              className={s.image}
              placeholder="empty"
              onLoadingComplete={() => setMenLoaded(true)}
            />
            <div className={s.cardContent}>
              <div className={s.cardHeader}>
                <div className={s.headerCaption}>
                  <b>NEW ARRIVAL: PINK CRISIS T-SHIRT</b>
                </div>
              </div>
              {/* <div className={s.cardFooter}>
                <div className={s.footerCaption}>
                  <span>
                    Photographed by Luis Molina
                    <br />
                    Styled by Laura Jiménez
                    <br />
                    Modeled by Ángel De Jesús
                  </span>
                </div>
              </div> */}
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MenWomen
