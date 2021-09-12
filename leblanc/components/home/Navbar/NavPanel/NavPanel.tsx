import React, { FC, useState } from 'react'
import s from './NavPanel.module.css'
import type { NavItem } from '@leblanc/data/home-navigation'
import { motion } from 'framer-motion'
import { NavDropdown } from '@leblanc/components/home'

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
  const [activeChild, setActiveChild] = useState('')
  // console.log(navItems)
  const handleActiveItem = (event: React.MouseEvent, target: string) => {
    event.preventDefault()
    setActiveChild(target)
  }

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
                  <span>
                    <button onClick={e => handleActiveItem(e, childItem.id)}>
                      {childItem.label}
                    </button>
                    <NavDropdown
                      grandChilds={childItem.childs}
                      active={childItem.id === activeChild}
                    />
                  </span>
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
