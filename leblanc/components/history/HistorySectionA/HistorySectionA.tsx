import React from 'react'
import Image from 'next/image'
import s from './HistorySectionA.module.css'
import { HistoryCard, HistoryTitle } from '@leblanc/components/history'

const HistorySectionA = () => {
  return (
    <div className={s.root}>
      <HistoryTitle>
        <b>LEBLANCSTUDIOS</b> IS A CULTURAL AGITATOR COMMITED TO PRODUCE CULTURE,
        HISTORY AND FUTURE THROUGH FASHION AND OTHER MEDIUMS FOUNDED IN THE DOMINICAN
        REPUBLIC 2014 ANGELO BEATO & YAMIL ARBAJE.
      </HistoryTitle>
      <HistoryCard>
        <div className="w-full">
          <Image
            src="/assets/history/history-1.jpg"
            width={1762}
            height={1570}
            layout="responsive"
          />
        </div>
      </HistoryCard>
    </div>
  )
}

export default HistorySectionA
