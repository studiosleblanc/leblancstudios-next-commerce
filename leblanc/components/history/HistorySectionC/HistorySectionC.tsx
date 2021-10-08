import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionC.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'

const HistorySectionC = () => {
  return (
    <div className={s.root}>
      <HistoryCard>
        <div className="w-full">
          <Image
            src="/assets/history/history-3-A.jpg"
            width={1781}
            height={1188}
            layout="responsive"
          />
        </div>
        <HistoryCaption className={s.caption}>
          <p>
            <b>KAPUTT</b>
          </p>
          <p>
            <b>S/S 2016</b>
          </p>
          <p>
            WAS LAUNCHED AT THE CASA DE BASTIDAS MUSEUM AT THE ZONA COLONIAL, SANTO
            DOMINGO.
          </p>
          <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
        </HistoryCaption>
        <div className={s.thumb_container}>
          <div className={cn(s.thumb, s.thumb_c)}>
            <Image
              src="/assets/history/history-3-C.png"
              width={604}
              height={763}
              layout="responsive"
            />
          </div>
          <div className={cn(s.thumb, s.thumb_b)}>
            <Image
              src="/assets/history/history-3-B.png"
              width={859}
              height={1087}
              layout="responsive"
            />
          </div>
        </div>
      </HistoryCard>
      <HistoryTitle>
        <h2>
          <b>KAPUTT’S</b> EARN THEM A PLACE IN THE FINALS OF THE SAN PELLEGRINO YOUNG
          TALENTS AWARD. AFTERWARDS YAMIL ARBAJE BEGAN STUDYING FASHION DESIGN AT THE
          CHAVÓN SCHOOL OF DESIGN.
        </h2>
      </HistoryTitle>
    </div>
  )
}

export default HistorySectionC
