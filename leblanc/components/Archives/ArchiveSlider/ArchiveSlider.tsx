import React, { useState, FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './ArchiveSlider.module.css'
import { NavigationOptions } from 'swiper/types/components/navigation'
import { ChevronLeft, ChevronRight } from '@leblanc/icons'
import { ProductImage } from '@commerce/types/product'
import type { ArchiveImage } from '@leblanc/data/archives'

SwiperCore.use([Autoplay, EffectFade, Navigation])

const navOptions: NavigationOptions = {
  prevEl: '.lbs-chevron-left',
  nextEl: '.lbs-chevron-right',
}

interface Props {
  images: ArchiveImage[]
}

const ArchiveSlider: FC<Props> = ({ images }) => {
  return (
    <Swiper
      effect={'fade'}
      loop
      autoHeight
      autoplay={{ delay: 4000 }}
      navigation={navOptions}>
      <ChevronLeft className={cn('lbs-chevron-left', s.chevron, s.chevronLeft)} />
      {images.map((img, i) => {
        return (
          <SwiperSlide key={img.src}>
            <div className={s.imageContainer}>
              <Image
                src={img.src}
                width={img.width}
                height={img.height}
                layout="responsive"
              />
            </div>
          </SwiperSlide>
        )
      })}
      <ChevronRight className={cn('lbs-chevron-right', s.chevron, s.chevronRight)} />
    </Swiper>
  )
}

export default ArchiveSlider
