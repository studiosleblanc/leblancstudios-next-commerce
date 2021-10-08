import React from 'react'
import Image from 'next/image'
import s from './HistorySectionE.module.css'
import { HistoryCard, HistoryTitle } from '@leblanc/components/history'

const HistorySectionE = () => {
  return (
    <div className={s.root}>
      <HistoryCard className={s.cardImage}>
        <div className={s.imgContainer}>
          <Image
            src="/assets/history/history-4-B.jpg"
            width={1497}
            height={998}
            layout="responsive"
          />
        </div>
      </HistoryCard>
      <HistoryTitle>
        <h2>
          <b>READY-MADE OBJECTS</b> <br /> LAUNCHING EVENT AT DISTRITO, <br />
          SANTO DOMINGO.
        </h2>
      </HistoryTitle>
    </div>
  )
}

export default HistorySectionE
