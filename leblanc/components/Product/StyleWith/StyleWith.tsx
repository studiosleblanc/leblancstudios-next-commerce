import React from 'react'
import Image from 'next/image'
import s from './StyleWith.module.css'

const StyleWith = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.productsContainer}>
          <div className={s.product}>
            <Image
              width={268}
              height={356}
              src="/assets/product/style_with_1.jpg"
              objectFit="cover"
            />
          </div>
          <div className={s.product}>
            <Image
              width={267}
              height={356}
              src="/assets/product/style_with_2.jpg"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={s.caption}>style with</div>
      </div>
    </div>
  )
}

export default StyleWith
