import React, { FC, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'
import Image from 'next/image'
import s from './FeaturedCollection.module.css'
import { LogoIntimo, TextShopTimelessDuck } from '@leblanc/svg'

const FeaturedRow: FC = () => {
  const [isHover, toggleHover] = useState(false)

  const handleHover = () => {
    toggleHover(!isHover)
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
      <div
        className={cn(s.column, s.columnLeft)}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        <div className={s.imgContainer}>
          <Image
            quality="85"
            src="/assets/home/shop_timeless.jpg"
            alt="Leblanc Studios"
            width={963}
            height={1443}
            layout="responsive"
            objectFit="cover"
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

        <TextShopTimelessDuck className={s.textDuck} />

        <motion.div
          className={s.content}
          initial="exit"
          animate={isHover ? 'enter' : 'exit'}
          variants={contentAnimate}>
          <div className={s.contentBody}>
            <p>
              SS21: <b>Timeless Duck Shirt: [Intimo y Personal]</b> belongs to the
              line with most recognition of LEBLANCSTUDIOS. For this season, we
              explored the private sphere of our clients using clothes that reflect
              the Caribbean masculinity and femininity. Creating a character based on
              traditional clothing typologies of our country and interpreting the
              sillhouettes and colors that typically define Caribbean casualwear in a
              new way.
            </p>
            <p>
              We expanded our range of products, developing denim shirts, skirts
              bucket hats, tote bags, and more featured products. With patches and
              embroidery motifs with messages like “Federación de Mujeres Dominicanas
              1962”, “Federación de Mujeres Puertorriquenas 1975”,
              “African-Caribbean-Pacific”, that explore and encourage cultural
              dialogues within the Caribbean region and the rest of the world.
            </p>

            <p>
              The names of the pieces came from important names of overlooked people
              in fashion. For example, Viola Longacre, the woman who had the oldest
              pair of jeans.
            </p>
          </div>

          <div className={s.contentfooter}>
            The collection was developed in Santo Domingo, Dominican Republic and
            produced in Peru, Turkey, China, and the Dominican Republic in 2021.
          </div>
        </motion.div>
      </div>
      <div className={s.column}>
        <div className={s.imgContainer}>
          <Image
            quality="85"
            src="/assets/home/duck.jpg"
            alt="Leblanc Studios"
            width={964}
            height={1440}
            layout="responsive"
            objectFit="cover"
            className={s.image}
            // layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedRow
