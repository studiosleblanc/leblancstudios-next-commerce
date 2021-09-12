import React, { FC } from 'react'
import s from './NavDropdown.module.css'
import { motion } from 'framer-motion'
import type { NavItem } from '@leblanc/data/home-navigation'

interface Props {
  grandChilds: NavItem[]
  active: boolean
}

const dropdownAnimation = {
  enter: {
    display: 'flex',
    opacity: 1,
    x: 0,
  },
  exit: {
    display: 'none',
    opacity: 0,
    x: 30,
  },
}

const NavDropdown: FC<Props> = ({ grandChilds, active }) => {
  return (
    <motion.div
      initial="exit"
      animate={active ? 'enter' : 'exit'}
      variants={dropdownAnimation}
      className={s.root}>
      <div className={s.arrowContainer}>{'>'}</div>
      <ul className={s.menu}>
        {grandChilds.map(item => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default NavDropdown
