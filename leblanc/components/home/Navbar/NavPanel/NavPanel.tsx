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
  setChildLabel: React.Dispatch<React.SetStateAction<React.ReactNode | string>>
}

const menuAnimation = {
  enter: {
    display: 'block',
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
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
  setChildLabel,
}) => {
  const handleActiveItem = (e: React.MouseEvent, target: NavItem) => {
    e.preventDefault()
    setActiveItemChild(target.id)
    setChildLabel(target.label)
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
                    <a href="#" onClick={e => handleActiveItem(e, childItem)}>
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
