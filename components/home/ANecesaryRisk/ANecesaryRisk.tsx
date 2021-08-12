import React, { FC } from 'react'
import Image from 'next/image'
import s from './ANecesaryRisk.module.css'
import { LogoGusPena, LogoHorizontal, LogoANecesaryRisk } from '@components/svg'

const ANecesaryRisk: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.topBar}>
        <LogoHorizontal />
        <LogoGusPena className={s.logoGus} />
      </div>
      <div className={s.card}>
        <Image
          src="/assets/home/aNecesaryRisk_socks.png"
          alt="A Necesary Risk"
          className={s.cardImage}
          width={1920}
          height={1377}
          layout="responsive"
        />
        <div className={s.cardLogoContainer}>
          <LogoANecesaryRisk className={s.cardLogo} />
        </div>
      </div>
    </div>
  )
}

export default ANecesaryRisk
