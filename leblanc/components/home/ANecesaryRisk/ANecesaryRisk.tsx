import React, { FC, useState } from 'react'
import Image from 'next/image'
import s from './ANecesaryRisk.module.css'
import { motion } from 'framer-motion'
import { LogoGusPena, LogoHorizontal, LogoANecesaryRisk } from '@components/svg'
import { SwitchButton } from '@components/ui'

const ANecesaryRisk: FC = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={s.root}>
      <motion.div
        animate={{ opacity: toggle ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={s.bgImageWrapper}>
        <Image
          priority
          unoptimized
          src="/assets/home/aNecessaryRisk_bg.jpg"
          alt="A Necesary Risk BG"
          className={s.bgImage}
          width={2560}
          height={1806}
          layout="responsive"
          objectFit="cover"
        />
      </motion.div>
      <div className={s.topBar}>
        <LogoHorizontal />
        <LogoGusPena className={s.logoGus} />
      </div>
      <div className={s.card}>
        <Image
          unoptimized
          src="/assets/home/aNecessaryRisk_socks.png"
          alt="A Necesary Risk"
          className={s.cardImage}
          width={1920}
          height={1377}
          layout="responsive"
        />
        <SwitchButton toggle={toggle} setToggle={setToggle} />
        <div className={s.cardLogoContainer}>
          <LogoANecesaryRisk className={s.cardLogo} />
        </div>
      </div>
    </div>
  )
}

export default ANecesaryRisk
