import React, { FC, useState } from 'react'
import Image from 'next/image'
import s from './ArchivesSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { TextArchives } from '@leblanc/svg'

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade])

const ArchivesSlider: FC = () => {
  const [slide, setSlide] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

  const sliderSvgAnimate = {
    enter: {
      opacity: 1,
      // y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      display: 'flex',
    },
    exit: {
      opacity: 0,
      // y: -100,
      transition: {
        duration: 0.5,
      },
    },
  }

  const toggleSlideSvg = () => {
    setSlide(!slide)
  }
  return (
    <>
      {isDesktop && (
        <Swiper effect={'fade'} loop autoplay={{ delay: 4000 }}>
          <SwiperSlide className={s.swiperSlide}>
            {({ isActive }) => {
              return (
                <>
                  <Image
                    unoptimized
                    src="/assets/home/archive-1.jpg"
                    layout="responsive"
                    width={1920}
                    height={1360}
                  />
                  <motion.div
                    className={s.slideSvgWrapper}
                    initial="exit"
                    animate={isActive ? 'enter' : 'exit'}
                    variants={sliderSvgAnimate}>
                    <TextArchives className={s.slideSvgText} />
                  </motion.div>
                  <div className={s.slideCaption}>
                    <h5>
                      From Archivo General De La Nación, 1973. [Gregorio García
                      Castro.]
                    </h5>
                    <h5>Fondo Editora Hoy</h5>
                  </div>
                </>
              )
            }}
          </SwiperSlide>
          <SwiperSlide className={s.swiperSlide}>
            <Image
              unoptimized
              src="/assets/home/archive-2.jpg"
              layout="responsive"
              width={1920}
              height={1360}
            />
            <div className={s.slideCaption}>
              <h5>
                From Archivo General De La Nación, 1975. [Orlando Martínez Howley.]
              </h5>
              <h5>Fondo Editora Hoy</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.swiperSlide}>
            <Image
              unoptimized
              src="/assets/home/archive-3.jpg"
              layout="responsive"
              width={1920}
              height={1360}
            />
            <div className={s.slideCaption}>
              <h5>
                From Archivo General De La Nación, 1975. [Orlando Martínez Howley.]
              </h5>
              <h5>Fondo Editora Hoy</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  )
}

export default ArchivesSlider
