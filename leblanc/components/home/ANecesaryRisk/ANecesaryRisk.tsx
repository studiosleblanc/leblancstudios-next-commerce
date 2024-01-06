import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from './ANecesaryRisk.module.css'
import { motion } from 'framer-motion'
// import { LogoGusPena, LogoHorizontal, LogoANecesaryRisk } from '@leblanc/svg'
import KidImg from 'public/assets/home/kid.png'
import Kid2Img from 'public/assets/home/kid2.png'
import { SwitchButton } from '@leblanc/components/ui'

const ANecesaryRisk: FC = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={s.root}>
    
        <Image
          priority
          unoptimized
          src={KidImg}
          alt="kids leblanc"
          className={s.bgImage}
          width={1920}
          height={1413}
          layout="responsive"
          objectFit="cover"
        />

      <motion.div
        animate={{ opacity: toggle ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={s.bgImageWrapper}>
          <a className={s.card}>
            <Image
              unoptimized
              src={Kid2Img}
              alt="kids leblanc"
              className={s.cardImage}
              width={1920}
              height={1413}
              layout="fill"
              objectFit="cover"
            />
          </a>
      </motion.div>
      <SwitchButton toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default ANecesaryRisk
/*
  <div className={s.topBar}>
        <LogoHorizontal className={s.logoLeblanc} />
        <LogoGusPena className={s.logoGus} />
      </div>
      */
