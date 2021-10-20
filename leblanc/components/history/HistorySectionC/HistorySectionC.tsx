import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionC.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'
import { Controller, Scene } from 'react-scrollmagic'
import { motion } from 'framer-motion'

const HistorySectionC = () => {
  return (
    <div className={s.root}>
      <div id="scene-C-1"></div>
      <Controller>
        <Scene
          triggerElement="#scene-C-1"
          duration="250%"
          pin
          // classToggle="visible"
          // offset="-200%"
          triggerHook="onLeave"
          indicators={true}>
          {(progress: number) => {
            // let thumb_a_Y = progress > 0.5 ? -100 + progress * 100 : -100
            let thumb_a_Y = -100 + Math.round(progress * 100)
            let thumb_b_X = 120 - Math.round(progress * 120)
            return (
              <div>
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
                      WAS LAUNCHED AT THE CASA DE BASTIDAS MUSEUM AT THE ZONA
                      COLONIAL, SANTO DOMINGO.
                    </p>
                    <p>AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.</p>
                  </HistoryCaption>
                  <div className={s.thumb_container}>
                    <div
                      style={{
                        transform: `translateY(${thumb_a_Y}%)`,
                      }}
                      className={cn(s.thumb, s.thumb_b)}>
                      <Image
                        src="/assets/history/history-3-C.png"
                        width={604}
                        height={763}
                        layout="responsive"
                      />
                    </div>
                    <div
                      style={{
                        transform: `translateX(${thumb_b_X}%)`,
                      }}
                      className={cn(s.thumb, s.thumb_a)}>
                      <Image
                        src="/assets/history/history-3-B.png"
                        width={859}
                        height={1087}
                        layout="responsive"
                      />
                    </div>
                  </div>
                </HistoryCard>
              </div>
            )
          }}
        </Scene>
      </Controller>
      <div id="scene-C-2"></div>
      <Controller>
        <Scene
          triggerElement="#scene-C-2"
          duration={280}
          triggerHook={0.7}
          indicators={true}>
          {(progress: number) => (
            <div style={{ opacity: progress }}>
              <HistoryTitle>
                <h2>
                  <b>KAPUTT’S</b> EARN THEM A PLACE IN THE FINALS OF THE SAN
                  PELLEGRINO YOUNG TALENTS AWARD. AFTERWARDS YAMIL ARBAJE BEGAN
                  STUDYING FASHION DESIGN AT THE CHAVÓN SCHOOL OF DESIGN.
                </h2>
              </HistoryTitle>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  )
}

export default HistorySectionC
