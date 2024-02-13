import React, { FC } from 'react'
import cn from 'classnames'
import s from './SwitchButton.module.css'
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

interface SwitchButtonProps {
  toggle: boolean
  setToggle: Function
}

const SwitchButton: FC<SwitchButtonProps> = ({ toggle, setToggle }) => {
  // const [toggle, setToggle] = useState(false)
  const root = cn(s.switch, toggle ? s.on : s.off)

  const switchAnimate = {
    on: {
      backgroundColor: '#14FF00',
    },
    off: {
      backgroundColor: '#dddddd',
    },
  }

  const ballAnimate = {
    on: {
      left: 4,
      right: 'auto',
    },
    off: {
      left: 'auto',
      right: 4,
    },
  }

  return (
    <motion.div
      layout
      animate={toggle ? 'on' : 'off'}
      transition={{ duration: 0.4 }}
      variants={switchAnimate}
      className={root}
      onClick={() => setToggle(!toggle)}>
      <motion.div
        animate={toggle ? 'on' : 'off'}
        variants={ballAnimate}
        transition={{ duration: 0.4, type: 'spring' }}
      />
    </motion.div>
  )
}

export default SwitchButton
