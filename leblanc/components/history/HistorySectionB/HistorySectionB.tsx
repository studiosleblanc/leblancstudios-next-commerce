import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionB.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'

const HistorySectionB = () => {
  return (
    <div className={s.root}>
      <HistoryTitle>
        <h2>
          <b>FAUSSE GEOMÉTRIÉ</b> EMBRACES THE IMPERFECTION ABOUT THE CONSTRUCTION OF
          CLASSIC GARMENTS. DEVELOPING LOUNGE PANTS MADE OF CASHMERE, SWEATERS WITH
          PATCHES OF DISTORTED FIGURES, HAVING A RESULT OF A CASUAL AND FUN
          ENVIRONMENT.
        </h2>
      </HistoryTitle>

      <HistoryCard>
        <div className={s.imgContainer}>
          <Image
            src="/assets/history/history-2-A.jpg"
            width={1770}
            height={1183}
            layout="responsive"
          />
        </div>
        <HistoryCaption>
          <p>
            <b>FAUSSE GEOMÉTRIÉ</b>
          </p>
          <p>
            <b>F/W 2015</b>
          </p>
          <p>
            WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA CULTURA, StANTO
            DOMINGO.
          </p>
          <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
        </HistoryCaption>
      </HistoryCard>
      <HistoryCard>
        <div className="w-full">
          <Image
            src="/assets/history/history-2-B.jpg"
            width={1774}
            height={1182}
            layout="responsive"
          />
        </div>
        <HistoryCaption>
          <p>
            <b>FAUSSE GEOMÉTRIÉ</b>
          </p>
          <p>
            <b>F/W 2015</b>
          </p>
          <p>
            WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA CULTURA, StANTO
            DOMINGO.
          </p>
          <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
        </HistoryCaption>
      </HistoryCard>
    </div>
  )
}

export default HistorySectionB
