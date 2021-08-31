import React, { FC } from 'react'
import Image from 'next/image'
import s from './FeaturedSection.module.css'
import { TextANRxGusPena } from '@leblanc/svg'

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
          <TextANRxGusPena />
        </div>
        <div className={s.imgContainer}>
          <Image
            src="/assets/images/gus_pena_road.jpg"
            width={664}
            height={699}
            objectPosition="right"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={s.rightCol}>
        <div className={s.imgContainer}>
          <Image
            src="/assets/images/art_gallery.jpg"
            width={1134}
            height={901}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
