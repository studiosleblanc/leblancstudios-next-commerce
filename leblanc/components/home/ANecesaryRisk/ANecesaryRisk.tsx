import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from './ANecesaryRisk.module.css'
import { motion } from 'framer-motion'
import { LogoGusPena, LogoHorizontal, LogoANecesaryRisk } from '@leblanc/svg'
import { SwitchButton } from '@leblanc/components/ui'

const ANecesaryRisk: FC = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={s.root}>
    
        <Image
          priority
          unoptimized
          src="/assets/home/kid.png"
          alt="kids leblanc"
          className={s.bgImage}
          width={1920}
          height={1441}
          layout="responsive"
          objectFit="cover"
        />

      <motion.div
        animate={{ opacity: toggle ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={s.bgImageWrapper}>
        <Link href="/product/anr-blue-socks">
          <a className={s.card}>
            <Image
              unoptimized
              src="/assets/home/kid2.png"
              alt="kids leblanc"
              className={s.cardImage}
              width={1920}
              height={1441}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
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
