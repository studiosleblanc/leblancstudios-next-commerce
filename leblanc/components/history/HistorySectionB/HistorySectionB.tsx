import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionB.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'
import { Controller, Scene } from 'react-scrollmagic'

const HistorySectionB = () => {
  return (
    <div className={s.root}>
      <div id="scene-B-1"></div>
      <Controller>
        <Scene
          triggerElement="#scene-B-1"
          duration={280}
          // pin
          // classToggle="visible"
          // offset="-200%"
          triggerHook={0.7}
          // indicators={true}
        >
          {(progress: number) => (
            <div style={{ opacity: progress }}>
              <HistoryTitle>
                <b>FAUSSE GEOMÉTRIÉ</b> EMBRACES THE IMPERFECTION ABOUT THE
                CONSTRUCTION OF CLASSIC GARMENTS. DEVELOPING LOUNGE PANTS MADE OF
                CASHMERE, SWEATERS WITH PATCHES OF DISTORTED FIGURES, HAVING A RESULT
                OF A CASUAL AND FUN ENVIRONMENT.
              </HistoryTitle>
            </div>
          )}
        </Scene>
      </Controller>

      
      <Controller>
        <Scene
          triggerElement="#scene-B-2"
          duration={100}
          // offset="100%"
          offset="-100px"
          triggerHook="onEnter"
          indicators={true}
        >
          {(progress: number) => (
            <div className={s.cardsContainer}>
              <HistoryCard>
                <div className={s.imgContainer}>
                  <Image
                    src="/assets/history/history-2-A.jpg"
                    width={1772}
                    height={1182}
                    layout="responsive"
                    priority
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
                    WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA
                    CULTURA, SANTO DOMINGO.
                  </p>
                  <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
                </HistoryCaption>
              </HistoryCard>
              <div style={{ opacity: progress }}>
                <HistoryCard className={s.cardOver}>
                  <div className="w-full">
                    <Image
                      src="/assets/history/history-2-B.jpg"
                      width={1772}
                      height={1182}
                      layout="responsive"
                      priority
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
                      WAS PRESENTED AT THE MUSEUM OF MODERN ART, IN PLAZA DE LA
                      CULTURA, SANTO DOMINGO.
                    </p>
                    <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
                  </HistoryCaption>
                </HistoryCard>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
      <div id="scene-B-2"></div>
    </div>
  )
}

export default HistorySectionB
