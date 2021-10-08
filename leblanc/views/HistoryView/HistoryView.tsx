import React from 'react'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { HistoryLayout } from '@leblanc/layouts'
import s from './HistoryView.module.css'
import { HistorySectionA, HistorySectionB } from '@leblanc/components/history'

const HistoryView = () => {
  return (
    <HistoryLayout>
      <div className={s.container}>
        {/* Section A */}
        <HistorySectionA />
        {/* Section B */}
        <HistorySectionB />
        {/* Section C */}
        <div className={cn(s.section, s.section3)}>
          <div className={s.cardImage}>
            <div className={s.imgContainer}>
              <Image
                src="/assets/history/history-3-A.jpg"
                width={1781}
                height={1188}
                layout="responsive"
              />
            </div>
            <div className={s.cardImageContent}>
              <p>
                <b>KAPUTT</b>
              </p>
              <p>
                <b>S/S 2016</b>
              </p>
              <p>
                WAS LAUNCHED AT THE CASA DE BASTIDAS MUSEUM AT THE ZONA COLONIAL,
                SANTO DOMINGO.
              </p>
              <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
            </div>
            <div className={s.thumb_3_container}>
              <div className={cn(s.thumb_3, s.thumb_3_c)}>
                <Image
                  src="/assets/history/history-3-C.png"
                  width={604}
                  height={763}
                  layout="responsive"
                />
              </div>
              <div className={cn(s.thumb_3, s.thumb_3_b)}>
                <Image
                  src="/assets/history/history-3-B.png"
                  width={859}
                  height={1087}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className={s.title}>
            <h2>
              <b>KAPUTT’S</b> EARN THEM A PLACE IN THE FINALS OF THE SAN PELLEGRINO
              YOUNG TALENTS AWARD. AFTERWARDS YAMIL ARBAJE BEGAN STUDYING FASHION
              DESIGN AT THE CHAVÓN SCHOOL OF DESIGN.
            </h2>
          </div>
        </div>
        {/* Section D */}
        <div className={cn(s.section, s.section4)}>
          <div className={s.cardImage}>
            <div className={s.bgImg}>
              <Image
                src="/assets/history/history-4-A.jpg"
                width={1278}
                height={1913}
                layout="responsive"
              />
            </div>
            <div className={s.cardImageMiddleContent}>
              <div className={s.title}>
                <h2>
                  AS THE FUNDAMENTALS OF THE CONCEPTUAL ART HAS BEEN ALWAYS PRESENT
                  IN OUR WORK,
                  <br /> <b>READY-MADE OBJECTS</b> EXPLORES THE WORK OF THE DADAISTS.
                  WE DECIDED TO INCORPORATE ICONIC DADA PIECES BY MAKING IMPERFECT
                  DOODLES THAT REPRESENTED THE INTERESTS OF OUR COLLABORATOR RODOLFO
                  DIETSCH.
                </h2>
              </div>
            </div>
            <div className={s.cardImageContent}>
              <p>
                <b>READY-MADE OBJECTS FT. RODOLFO DIETSCH</b>
              </p>
              <p>
                <b>OFF SEASON: 2017</b>
              </p>
              <p>WAS LAUNCHED AT THE DISTRITO STORE, SANTO DOMINGO.</p>
              <p>AD CAMPAIGN SHOT BY MARC CORDOVA</p>
            </div>
          </div>
        </div>
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
