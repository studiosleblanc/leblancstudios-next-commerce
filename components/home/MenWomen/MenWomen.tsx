import React, { FC } from 'react'
import Image from 'next/image'
import s from './MenWomen.module.css'
import { Grid } from '@components/ui'

const MenWomen: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.column}>
        <Image
          quality="85"
          src="/assets/home/mens.jpg"
          alt="Leblanc Studios"
          width={963}
          height={1443}
          layout="responsive"
          // objectFit="cover"
          className={s.image}
          // layout="fill"
        />
      </div>
      <div className={s.column}>
        <Image
          quality="85"
          src="/assets/home/womens.jpg"
          alt="Leblanc Studios"
          width={964}
          height={1440}
          layout="responsive"
          // objectFit="cover"
          className={s.image}
          // layout="fill"
        />
      </div>
    </div>
  )
}

export default MenWomen
