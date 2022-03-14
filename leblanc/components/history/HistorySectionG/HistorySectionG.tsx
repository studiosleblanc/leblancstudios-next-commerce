import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './HistorySectionG.module.css'
import {
  HistoryCard,
  HistoryTitle,
  HistoryCaption,
} from '@leblanc/components/history'
import { Controller, Scene } from 'react-scrollmagic'
import { motion } from 'framer-motion'

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const HistorySectionG = () => {
  return (
    <div className={s.root}>
      <div id="scene-G-1"></div>
      <Controller>
        <Scene
          triggerElement="#scene-G-1"
          duration={280}
          triggerHook={0.7}
          // indicators={true}
        >
          {(progress: number) => (
            <div style={{ opacity: progress }}>
              <HistoryCard>
                <HistoryTitle className={s.title}>
                  <b>SINGULAR UNITY</b> IS BASED ON THE CONCEPT OF TECHNOLOGICAL
                  SINGULARITY, OR THE WAY IN WHICH EVERYTHING CONVERGES IN ONE PLACE
                  DUE TO THE LARGE AMOUNT OF INFORMATION THAT WE ARE PROCESSING
                  NOWADAYS. WE ARE HIGHLY CONNECTED AND SURROUNDED BY INFORMATION
                  THAT WE ARE CONSTANTLY PROCESSING VIA OUR TECHNOLOGICAL DEVICES,
                  RESULTING IN A DILUTION OR LOSS OF CULTURAL IDENTITY, LEAVING US ALL
                  IN A STATE OF SOME FORM OF “CUT-AND-PASTE”. SINGULAR UNITY IS MADE
                  UP OF TWO CONVERSATIONS: THE WAY IN TECHNOLOGY AFFECTS US AND IS
                  CHANGING OUR PERCEPTION OF TIME AND THE CLASS-BASED STEREOTYPES IN
                  THE DOMINICAN REPUBLIC.
                </HistoryTitle>
              </HistoryCard>
            </div>
          )}
        </Scene>
      </Controller>
      <div id="scene-G-2"></div>
      <Controller>
        <Scene
          triggerElement="#scene-G-2"
          duration="150%"
          pin
          // classToggle="visible"
          // offset="-200%"
          triggerHook="onLeave"
          // indicators={true}
        >
          {(progress: number) => {
            return (
              <div>
                <HistoryCard>
                  <div className={s.cardInner}>
                    <div className={s.cardCol}>
                      <motion.div
                        className={s.imgContainer}
                        animate={progress > 0 ? 'visible' : 'hidden'}
                        variants={variants}>
                        <Image
                          src="/assets/history/history-G-1.jpg"
                          className={s.img}
                          width={1501}
                          height={1875}
                          layout="responsive"
                          objectFit="cover"
                          priority
                        />
                      </motion.div>
                    </div>
                    <div className={s.cardCol}>
                      <motion.div
                        className={s.imgContainer}
                        animate={progress > 0.5 ? 'visible' : 'hidden'}
                        variants={variants}>
                        <Image
                          src="/assets/history/history-G-2.jpg"
                          className={s.img}
                          width={1501}
                          height={1875}
                          layout="responsive"
                          objectFit="cover"
                          priority
                        />
                      </motion.div>
                    </div>
                  </div>
                </HistoryCard>
              </div>
            )
          }}
        </Scene>
      </Controller>
    </div>
  )
}

export default HistorySectionG
