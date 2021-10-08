import React from 'react'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { HistoryLayout } from '@leblanc/layouts'
import s from './HistoryView.module.css'

const HistoryView = () => {
  return (
    <HistoryLayout>
      <div className={s.container}>
        <div className={cn(s.section, s.section1)}>
          <div className={s.title}>
            <h2>
              <b>LEBLANCSTUDIOS</b> IS A CULTURAL AGITATOR COMMITED TO PRODUCE
              CULTURE, HISTORY AND FUTURE THROUGH FASHION AND OTHER MEDIUMS FOUNDED
              IN THE DOMINICAN REPUBLIC 2014 ANGELO BEATO & YAMIL ARBAJE.
            </h2>
          </div>
          <div className={s.cardImage}>
            <div className={s.imgContainer}>
              <Image
                src="/assets/history/history-1.jpg"
                width={1762}
                height={1570}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className={cn(s.section, s.section2)}>
          <div className={s.title}>
            <h2>
              <b>FAUSSE GEOMÉTRIÉ</b> EMBRACES THE IMPERFECTION ABOUT THE
              CONSTRUCTION OF CLASSIC GARMENTS. DEVELOPING LOUNGE PANTS MADE OF
              CASHMERE, SWEATERS WITH PATCHES OF DISTORTED FIGURES, HAVING A RESULT
              OF A CASUAL AND FUN ENVIRONMENT.
            </h2>
          </div>

          <div className={s.cardImage}>
            <div className={s.imgContainer}>
              <Image
                src="/assets/history/history-2-A.jpg"
                width={1770}
                height={1183}
                layout="responsive"
              />
            </div>
            <div className={s.cardImageContent}>
              <p>
                <b>FAUSSE GEOMÉTRIÉ</b>
              </p>
              <p>
                <b>F/W 2015</b>
              </p>
              <p>
                WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA CULTURA,
                StANTO DOMINGO.
              </p>
              <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
            </div>
          </div>
          <div className={s.cardImage}>
            <div className={s.imgContainer}>
              <Image
                src="/assets/history/history-2-B.jpg"
                width={1770}
                height={1183}
                layout="responsive"
              />
            </div>
            <div className={s.cardImageContent}>
              <p>
                <b>FAUSSE GEOMÉTRIÉ</b>
              </p>
              <p>
                <b>F/W 2015</b>
              </p>
              <p>
                WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA CULTURA,
                StANTO DOMINGO.
              </p>
              <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
            </div>
          </div>
        </div>
      </div>
    </HistoryLayout>
  )
}

HistoryView.theme = 'dark'
export default HistoryView
