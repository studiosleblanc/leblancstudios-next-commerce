import React, { FC, useState } from 'react'
import s from './NavPanel.module.css'
import type { NavItem } from '@leblanc/data/home-navigation'
import { motion } from 'framer-motion'

interface Props {
  navItems: NavItem[]
  activeItem: string
}

const menuAnimation = {
  enter: {
    display: 'block',
    opacity: 1,
    x: 0,
  },
  exit: {
    display: 'none',
    opacity: 0,
    x: 30,
  },
}

const NavPanel: FC<Props> = ({ navItems, activeItem }) => {
  // console.log(navItems)
  return (
    <div>
      {navItems
        .filter(i => i.childs)
        .map((item: NavItem) => (
          <motion.ul
            initial="exit"
            animate={activeItem === item.id ? 'enter' : 'exit'}
            variants={menuAnimation}
            className={s.root}
            key={item.id}>
            {item.childs?.map(childItem => (
              <li key={childItem.id}>
                {childItem.childs ? (
                  <a href={childItem.href}>{childItem.label}</a>
                ) : (
                  <a href={childItem.href}>{childItem.label}</a>
                )}
              </li>
            ))}
          </motion.ul>
        ))}
    </div>
  )
}

export default NavPanel
