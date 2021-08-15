import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from './FeaturedCollection.module.css'
import { LogoIntimo, TextShopTimelessDuck } from '@components/svg'

const FeaturedRow: FC = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.column, s.columnLeft)}>
        <div className={s.imgContainer}>
          <Image
            quality="85"
            src="/assets/home/shop_timeless.jpg"
            alt="Leblanc Studios"
            width={963}
            height={1443}
            layout="responsive"
            objectFit="cover"
            className={s.image}
            // layout="fill"
          />
        </div>
        <LogoIntimo className={s.logoIntimo} />
        <TextShopTimelessDuck className={s.textDuck} />
        <div className={s.content}>content</div>
      </div>
      <div className={s.column}>
        <div className={s.imgContainer}>
          <Image
            quality="85"
            src="/assets/home/duck.jpg"
            alt="Leblanc Studios"
            width={964}
            height={1440}
            layout="responsive"
            objectFit="cover"
            className={s.image}
            // layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedRow
