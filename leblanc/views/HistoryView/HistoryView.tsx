import React from 'react'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { HistoryLayout } from '@leblanc/layouts'
import s from './HistoryView.module.css'
import {
  HistorySectionA,
  HistorySectionB,
  HistorySectionC,
  HistorySectionD,
} from '@leblanc/components/history'

const HistoryView = () => {
  return (
    <HistoryLayout>
      <div className={s.container}>
        {/* Section A */}
        <HistorySectionA />
        {/* Section B */}
        <HistorySectionB />
        {/* Section C */}
        <HistorySectionC />
        {/* Section D */}
        <HistorySectionD />
        {/* Section D-2 */}
        <div className={cn(s.section, s.section5)}>
          <div className={s.cardImage}>
            <div className={s.imgContainer}>
              <Image
                src="/assets/history/history-4-B.jpg"
                width={1497}
                height={998}
                layout="responsive"
              />
            </div>
          </div>
          <div className={s.title}>
            <h2>
              <b>READY-MADE OBJECTS</b> <br /> LAUNCHING EVENT AT DISTRITO, <br />
              SANTO DOMINGO.
            </h2>
          </div>
        </div>
      </div>
    </HistoryLayout>
  )
}

HistoryView.theme = 'dark'
export default HistoryView
