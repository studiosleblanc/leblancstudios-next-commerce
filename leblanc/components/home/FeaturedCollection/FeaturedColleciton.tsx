import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import cn from 'classnames'
import Image from 'next/image'
import s from './FeaturedCollection.module.css'
import { LogoIntimo, TextShopTimelessDuck } from '@leblanc/svg'

const FeaturedRow: FC = () => {
  const [isHover, toggleHover] = useState(false)

  const handleHover = () => {
    toggleHover(isHover => !isHover)
  }

  const contentAnimate = {
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
      display: 'flex',
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,
        delay: 0.15,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <div className={s.root}>
      <Link href="/product/light-blue-classic-duck-shirt">
        <div className={s.row}>
          <div className={s.item}>
            <span>
              <b>Now Available:</b> 10 Years Issue Classic Duck Shirt
            </span>
          </div>
          <a
            className={cn(s.column, s.columnLeft)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            <div className={s.imgContainer}>
              <Image
                quality="85"
                src="/assets/home/classic-duck-shirt.png"
                alt="Leblanc Studios"
                width={1110}
                height={1010}
                layout="responsive"
                objectFit="contain"
                className={s.image}
                // layout="fill"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className={s.logoIntimoWrapper}>
              <LogoIntimo className={s.logoIntimo} />
            </motion.div>

            <motion.div
              className={s.content}
              initial="exit"
              animate={isHover ? 'enter' : 'exit'}
              variants={contentAnimate}>
              <div className={s.contentBody}>
                <div>
                  <p>
                    OFF SEASON: A Necessary Risk <b>[Collaboration with Gus Pena]</b>
                  </p>
                  <p>
                    LEBLANCSTUDIOS is pleased to present A Necessary Risk: a capsule
                    collection designed alongside the Dominican Artist Gus Pena.
                  </p>

                  <p>
                    Informed by his latest gallery exhibition, sci-fi, fictional
                    caribbean spaces and the absurd, LEBLANCSTUDIOS delves into the
                    universe of Gus Pena.
                  </p>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 'lighter',
                    fontSize: '13px',
                  }}>
                  The collection was developed in Santo Domingo, Dominican Republic
                  and produced in Portugal, China and the Dominican Republic.
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </Link>
      <Link href="/product/a-necessary-risk-printed-t-shirt">
        <div className={s.row}>
          <div className={s.item}>
            <span>
              <b>Now Available:</b> A Silent Mass Sunglasses
            </span>
          </div>
          <a className={s.column}>
            <div className={s.imgContainer}>
              <Image
                quality="85"
                src="/assets/home/silent-mass-sunglasses.png"
                alt="Leblanc Studios"
                width={1010}
                height={1010}
                layout="responsive"
                objectFit="contain"
                className={s.image}
                // layout="fill"
              />
            </div>
          </a>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedRow
