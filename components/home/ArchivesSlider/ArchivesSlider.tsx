import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import s from './ArchivesSlider.module.css'
// import { useKeenSlider } from 'keen-slider/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade])

const ArchivesSlider: FC = () => {
  return (
    <>
      <Swiper
        // {...props}
        // grabCursor
        // pauseonmouseenter={false}
        // breakpoints={breakpoints}
        effect={'fade'}
        loop
        autoplay={{ delay: 3500 }}>
        <SwiperSlide className={s.swiperSlide}>
          <Image
            quality={85}
            src="/assets/home/archive-1.jpg"
            layout="responsive"
            width={1920}
            height={1360}
          />
          <div className={s.slideCaption}>
            <h5>
              From Archivo General De La Nación, 1973. [Gregorio García Castro.]
            </h5>
            <h5>Fondo Editora Hoy</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiperSlide}>
          <Image
            quality={85}
            src="/assets/home/archive-2.jpg"
            layout="responsive"
            width={1920}
            height={1360}
          />
          <div className={s.slideCaption}>
            <h5>
              From Archivo General De La Nación, 1975. [Ornalndo Martínez Howley.]
            </h5>
            <h5>Fondo Editora Hoy</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiperSlide}>
          <Image
            quality={85}
            src="/assets/home/archive-3.jpg"
            layout="responsive"
            width={1920}
            height={1360}
          />
          <div className={s.slideCaption}>
            <h5>
              From Archivo General De La Nación, 1975. [Ornalndo Martínez Howley.]
            </h5>
            <h5>Fondo Editora Hoy</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ArchivesSlider
