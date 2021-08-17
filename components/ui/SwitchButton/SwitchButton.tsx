import React from 'react'
import cn from 'classnames'
import s from './SwitchButton.module.css'
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

const SwitchButton = () => {
  const [toggle, setToggle] = useState(false)
  const root = cn(s.switch, toggle ? s.on : s.off)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const switchAnimate = {
    on: {
      backgroundColor: '#22cc88',
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
      onClick={handleToggle}>
      <motion.div
        animate={toggle ? 'on' : 'off'}
        variants={ballAnimate}
        transition={{ duration: 0.4, type: 'spring' }}
      />
    </motion.div>
  )
}

export default SwitchButton
