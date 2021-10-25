import React, { FC } from 'react'
import Image from 'next/image'
import s from './FeaturedSection.module.css'
import { TextANRxGusPena } from '@leblanc/svg'
import { ProductItem } from '@leblanc/components/Product'
import { sigleSock } from '@leblanc/data/collection'

const FeaturedSection: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.leftCol}>
        <div className={s.rte}>
          <p>
            La permanencia de un sentido del humor absurdo en sus pinturas (desde sus
            tempranas hasta las actuales), y el derroche de dominio técnico, léase su
            efectiva (que no efectista) capacidad de mezclar recursos: gráficos y
            gestuales.
          </p>
          <TextANRxGusPena className={s.textxGusPena} />
        </div>
        <div className={s.leftImage}>
          <Image
            src="/assets/images/gus_pena_road.jpg"
            width={664}
            height={699}
            layout="responsive"
          />
        </div>
      </div>
      <div className={s.rightCol}>
        <div className={s.productCardContainer}>
          {/* <ProductItem item={sigleSock} asCard /> */}
        </div>
        <div className={s.bgContainer}>
          <Image
            src="/assets/images/art_gallery.jpg"
            width={1012}
            height={901}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
