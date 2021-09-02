import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from './ProductItem.module.css'
import type { CollectionItem } from '@leblanc/data/collection'

interface Props {
  item: CollectionItem
  asCard?: boolean
}

const ProductItem: FC<Props> = ({ item, asCard = false }) => {
  return (
    <div className={cn(s.item, { [s.asCard]: asCard })} key={item.name}>
      <div className={s.imageContainer}>
        <Image
          width={item.image.width}
          height={item.image.height}
          objectFit="cover"
          layout="responsive"
          src={item.image.src}
        />
      </div>
      <div className={s.details}>
        <div className={s.detailsContent}>
          <div className={s.colors}>
            {item.colors &&
              item.colors.map(color => (
                <div
                  className={s.swatch}
                  key={color}
                  style={{ backgroundColor: color }}></div>
              ))}
          </div>
          <span className={s.price}>{item.price}</span>
          <span>{item.name}</span>
          <span>Available Sizes:</span>
          <ul className={s.sizes}>
            {item.sizes.map(size => (
              <li key={size}>{size}</li>
            ))}
          </ul>
        </div>
        <div className={s.squeezeContainer}>
          <div className={s.squeeze}>Squeeze Out!</div>
        </div>
      </div>
      <div className={s.caption}>{item.collection}</div>
    </div>
  )
}

export default ProductItem
