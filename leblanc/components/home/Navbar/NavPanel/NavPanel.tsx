import React, { FC, useState } from 'react'
import s from './NavPanel.module.css'
import type { NavItem } from '@leblanc/data/home-navigation'
import { motion } from 'framer-motion'
import { NavDropdown } from '@leblanc/components/home'

interface Props {
  navItems: NavItem[]
  activeItem: string
  activeItemChild: string
  setActiveItemChild: React.Dispatch<React.SetStateAction<string>>
}

const menuAnimation = {
  enter: {
    display: 'block',
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
    transitionEnd: {
      display: 'none',
    },
  },
}

const NavPanel: FC<Props> = ({
  navItems,
  activeItem,
  activeItemChild,
  setActiveItemChild,
}) => {
  const handleActiveItem = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    setActiveItemChild(target)
  }

  return (
    <div className={s.root}>
      {navItems
        .filter(i => i.childs)
        .map((item: NavItem) => (
          <motion.ul
            initial="exit"
            animate={activeItem === item.id ? 'enter' : 'exit'}
            variants={menuAnimation}
            className={s.menu}
            key={item.id}>
            {item.childs?.map(childItem => (
              <li key={childItem.id}>
                {childItem.childs ? (
                  <>
                    <a href="#" onClick={e => handleActiveItem(e, childItem.id)}>
                      {childItem.label}
                    </a>
                    <NavDropdown
                      grandChilds={childItem.childs}
                      activeItemChild={activeItemChild}
                      setActiveItemChild={setActiveItemChild}
                    />
                  </>
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
