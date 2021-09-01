import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './ProductSlider.module.css'
import { NavigationOptions } from 'swiper/types/components/navigation'
import { ChevronLeft, ChevronRight } from '@leblanc/icons'

SwiperCore.use([Autoplay, EffectFade, Navigation])

const navOptions: NavigationOptions = {
  prevEl: '.lbs-chevron-left',
  nextEl: '.lbs-chevron-right',
}

const ProductSlider: FC = () => {
  return (
    <Swiper
      effect={'fade'}
      loop
      autoHeight
      autoplay={{ delay: 4000 }}
      navigation={navOptions}>
      <ChevronLeft className={cn('lbs-chevron-left', s.chevron, s.chevronLeft)} />
      <SwiperSlide>
        <div className={s.imageContainer}>
          <Image
            width={1676}
            height={2299}
            layout="responsive"
            src="/assets/product/product_slide_1.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1676}
          height={2513}
          layout="responsive"
          src="/assets/product/product_slide_2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1676}
          height={2515}
          layout="responsive"
          src="/assets/product/product_slide_3.jpg"
        />
      </SwiperSlide>
      <ChevronRight className={cn('lbs-chevron-right', s.chevron, s.chevronRight)} />
    </Swiper>
  )
}

export default ProductSlider
