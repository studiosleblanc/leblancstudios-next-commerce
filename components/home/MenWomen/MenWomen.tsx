import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from './MenWomen.module.css'
import { Tooltip } from '@components/ui'

const MenWomen: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.column}>
        <div className={s.card}>
          <Image
            priority
            unoptimized
            src="/assets/home/mens.jpg"
            alt="Leblanc Studios"
            width={963}
            height={1443}
            layout="responsive"
            className={s.image}
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
              top="34%"
              left="11%"
              width="20.6%"
              className={s.tooltip}
              text="Shirt [NMI]"
            />
            <Tooltip
              bottom="30%"
              right="15%"
              align="right"
              width="23.5%"
              className={s.tooltip}
              text="Trousers [NMI]"
            />
          </div>
        </div>
      </div>
      <div className={s.column}>
        <div className={s.card}>
          <Image
            priority
            unoptimized
            src="/assets/home/womens.jpg"
            alt="Leblanc Studios"
            width={964}
            height={1440}
            layout="responsive"
            className={s.image}
          />
          <div className={s.cardContent}>
            <div className={s.cardHeader}>
              <div className={s.headerCaption}>
                ss21: <b>[Timeless Duck Shirt: Intimo y Personal]</b>
              </div>
            </div>
            <div className={s.cardFooter}>
              <div className={s.footerCaption}>WOMENS</div>
            </div>

            <Tooltip
              top="8%"
              right="17%"
              align="right"
              width="23%"
              className={s.tooltip}
              text="Bucket Hat [TDS]"
            />
            <Tooltip
              top="36%"
              left="11%"
              width="26.5%"
              className={s.tooltip}
              text="Shirt Jacket [TDS]"
            />
            <Tooltip
              bottom="29%"
              right="7%"
              align="right"
              width="23.5%"
              className={s.tooltip}
              text="Skirt [TDS]"
            />
            <Tooltip
              bottom="25.5%"
              left="2.5%"
              width="26%"
              className={s.tooltip}
              text="Tote Bag [FMP]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenWomen
