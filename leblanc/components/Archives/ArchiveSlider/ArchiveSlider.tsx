import React, { useState, FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import SwiperCore, {
  // Lazy,
  // Virtual,
  // Autoplay,
  EffectFade,
  Navigation,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationOptions } from 'swiper/types'
import s from './ArchiveSlider.module.css'
import { ChevronLeft, ChevronRight } from '@leblanc/icons'
import parse from 'html-react-parser'
import type { ArchiveImage } from '@leblanc/data/archives'

SwiperCore.use([/*Autoplay,*/ EffectFade, Navigation])

const navOptions: NavigationOptions = {
  prevEl: '.lbs-chevron-left',
  nextEl: '.lbs-chevron-right',
}

interface Props {
  images: ArchiveImage[]
  credits: string
}

const ArchiveSlider: FC<Props> = ({ images, credits }) => {
  return (
    <div className={s.slideshowContainer}>
      <div className={s.chevronContainer}>
        <ChevronLeft className={cn('lbs-chevron-left', s.chevron)} />
      </div>
      <Swiper
        effect={'fade'}
        loop
        autoHeight
        // autoplay={{ delay: 5000 }}
        className={s.slideshow}
        navigation={navOptions}>
        {images.map((img: ArchiveImage, i) => {
          return (
            <SwiperSlide key={img.src}>
              <div className={s.imageContainer}>
                <Image
                  unoptimized
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  layout="responsive"
                />
              </div>
              {img.caption ? (
                <p className={s.credits}>{parse(img.caption)}</p>
              ) : (
                credits && <p className={s.credits}>{parse(credits)}</p>
              )}
              {/* <img
                data-src={img.src}
                className="swiper-lazy"
              /> */}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className={s.chevronContainer}>
        <ChevronRight className={cn('lbs-chevron-right', s.chevron)} />
      </div>
    </div>
  )
}

export default ArchiveSlider
