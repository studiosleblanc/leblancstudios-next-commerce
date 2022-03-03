import React, { useState, FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './ProductSlider.module.css'
import { NavigationOptions } from 'swiper/types'
import { ChevronLeft, ChevronRight } from '@leblanc/icons'
import { ProductImage } from '@commerce/types/product'
import products from '@framework/api/endpoints/catalog/products'

SwiperCore.use([Autoplay, EffectFade, Navigation])

const navOptions: NavigationOptions = {
  prevEl: '.lbs-chevron-left',
  nextEl: '.lbs-chevron-right',
}

interface Props {
  images: ProductImage[]
}

const ProductSlider: FC<Props> = ({ images }) => {
  return (
    <Swiper
      effect={'fade'}
      loop
      autoHeight
      autoplay={{ delay: 4000 }}
      navigation={navOptions}>
      {images.length > 2 && (
        <ChevronLeft className={cn('lbs-chevron-left', s.chevron, s.chevronLeft)} />
      )}
      {images.length >= 2 &&
        images.map((img, i) => {
          if (i > 0) {
            return (
              <SwiperSlide key={img.url}>
                {/* <div className={s.imageContainer}> */}
                <Image
                  src={img.url}
                  width={img.width}
                  height={img.height}
                  layout="responsive"
                />
                {/* </div> */}
              </SwiperSlide>
            )
          }
        })}
      {images.length > 2 && (
        <ChevronRight
          className={cn('lbs-chevron-right', s.chevron, s.chevronRight)}
        />
      )}
    </Swiper>
  )
}

export default ProductSlider
