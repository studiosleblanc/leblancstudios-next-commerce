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
  HistorySectionE,
  HistorySectionF,
  HistorySectionG,
} from '@leblanc/components/history'
import { ComingSoon } from '@leblanc/components/ui'

const HistoryView = () => {
  return (
    <HistoryLayout>
      <div className={s.container}>
        {/* Section A */}
        {/* <HistorySectionA /> */}
        {/* Section B */}
        {/* <HistorySectionB /> */}
        {/* Section C */}
        {/* <HistorySectionC /> */}
        {/* Section D */}
        {/* <HistorySectionD /> */}
        {/* Section E */}
        {/* <HistorySectionE /> */}
        {/* Section F */}
        {/* <HistorySectionF /> */}
        {/* Section G */}
        {/* <HistorySectionG /> */}
        <ComingSoon />
      </div>
    </HistoryLayout>
  )
}

// HistoryView.theme = 'dark'
export default HistoryView
