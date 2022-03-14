import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionF.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'
import { Controller, Scene } from 'react-scrollmagic'
import { motion } from 'framer-motion'

const variants_1 = {
  visible: { opacity: 1, display: 'flex' },
  hidden: { opacity: 0, transitionEnd: { display: 'none' } },
}
const textAppear = {
  visible: {
    opacity: 1,
    display: 'block',
    y: '-18vh',
    transition: { duration: 0.6 },
  },
  hidden: { opacity: 0, y: 0, transitionEnd: { display: 'none' } },
}

const getAppear = (progress: number, from: number, to: number): string => {
  return progress > from && progress < to ? 'visible' : 'hidden'
}

const HistorySectionF = () => {
  return (
    <div className={s.root}>
      <div id="scene-F-1"></div>
      <Controller>
        <Scene
          triggerElement="#scene-F-1"
          duration="350%"
          pin
          // classToggle="visible"
          // offset="-200%"
          triggerHook="onLeave"
          indicators={true}
          >
          {(progress: number, scene: any) => {
            console.log(scene)
            return (
              <div>
                <HistoryCard>
                  <div className={s.cardInner}>
                    <div className={cn(s.cardCol, s.cardLeftCol)}>
                      <motion.div
                        className={cn(s.fullHeightImgContainer, 'justify-end')}
                        animate={getAppear(progress, 0, 0.5)}
                        variants={variants_1}>
                        <img
                          src="/assets/history/history-7-A.jpg"
                          className={s.fullHeightImg}
                          alt="history-7-A img"
                        />
                      </motion.div>
                      <motion.div
                        animate={getAppear(progress, 0.5, 2)}
                        variants={variants_1}
                        className={s.fullHeightImgContainer}>
                        <img
                          src="/assets/history/history-7-C.jpg"
                          className={s.fullWidthImg}
                          alt="history-7-C img"
                        />
                      </motion.div>
                    </div>
                    <div className={cn(s.cardCol, s.cardRightCol)}>
                      <motion.div
                        animate={getAppear(progress, 0.25, 0.75)}
                        variants={variants_1}
                        className={s.fullHeightImgContainer}>
                        <img
                          src="/assets/history/history-7-B.jpg"
                          className={s.fullHeightImg}
                          alt="history-7-B img"
                        />
                      </motion.div>
                      <motion.div
                        animate={getAppear(progress, 0.75, 2)}
                        variants={variants_1}
                        className={s.fullHeightImgContainer}>
                        <img
                          src="/assets/history/history-7-D.jpg"
                          className={s.fullWidthImg}
                          alt="history-7-D img"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      animate={getAppear(progress, 0, 0.75)}
                      variants={variants_1}>
                      <HistoryCaption className={s.caption}>
                        <p>
                          <b>
                            WHITE SHIRT: IDENTITY THEFT CARDS, BRIBERY & ARTNAPPING,
                            2ND. EDITION
                            <br />
                            OFF SEASON: 2017
                          </b>
                        </p>
                        <p>
                          WAS LAUNCHED AT THE MAMEY LIBRERÍA CAFÉ AT THE ZONA
                          COLONIAL, SANTO DOMINGO.
                        </p>
                        <p>AD CAMPAIGN BY MÁXIMO DEL CASTILLO</p>
                      </HistoryCaption>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={progress > 0.99 ? 'visible' : 'hidden'}
                    variants={textAppear}>
                    <HistoryTitle className={s.title}>
                      <b>WHITE SHIRT 2ND. EDITION</b> LOOK INTO WHITE-COLLAR CRIMES,
                      FROM IDENTITY THEFT CARDS, ODEBRECHT BRIBERY SCANDAL TO GLOBAL
                      ARTNAPPING SITUATIONS. DELIVERED WITH STRONG GRAPHICS,
                      INFORMATIVE LABELS, BEING THIS COLLECTION A DECISIVE INPUT IN
                      OUR GRAPHIC AND COMMUNICATION IDENTITY, AND WHAT GOES
                      AFTERWARDS.
                    </HistoryTitle>
                  </motion.div>
                </HistoryCard>
              </div>
            )
          }}
        </Scene>
      </Controller>
    </div>
  )
}

export default HistorySectionF
