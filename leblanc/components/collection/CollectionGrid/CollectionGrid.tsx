import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { Product } from '@commerce/types/product'
import s from './CollectionGrid.module.css'
import { collection } from '@leblanc/data/collection'
import type { CollectionItem } from '@leblanc/data/collection'

interface Props {
  products: Product[]
}

const CollectionGrid: FC<Props> = ({ products }) => {
  console.log(products)
  return (
    <div className={s.root}>
      {collection.map((item: CollectionItem) => (
        <div className={s.item} key={item.name}>
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
              <div className={s.squeeze}>Squeze Out!</div>
            </div>
          </div>
          <div className={s.caption}>{item.collection}</div>
        </div>
      ))}
    </div>
  )
}

export default CollectionGrid
