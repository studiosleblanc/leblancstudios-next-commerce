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
      <Link href="/product/10-years-issue-classic-duck-shirt">
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

          </a>
        </div>
      </Link>
      <Link href="/product/a-silent-mass-sunglasses">
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
