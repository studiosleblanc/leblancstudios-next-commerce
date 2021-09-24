import React, { FC } from 'react'
import s from './NavDropdown.module.css'
import { motion } from 'framer-motion'
import type { NavItem } from '@leblanc/data/navigation/home-navigation'
import { VscArrowLeft } from 'react-icons/vsc'

interface Props {
  grandChilds: NavItem[]
  activeItemChild: string
  childItemId: string
  setActiveItemChild: React.Dispatch<React.SetStateAction<string>>
}

const dropdownAnimation = {
  enter: {
    display: 'flex',
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

const NavDropdown: FC<Props> = ({
  grandChilds,
  activeItemChild,
  childItemId,
  setActiveItemChild,
}) => {
  const handleBack = () => {
    setActiveItemChild('')
  }
  return (
    <motion.div
      initial={false}
      animate={activeItemChild === childItemId ? 'enter' : 'exit'}
      variants={dropdownAnimation}
      className={s.root}>
      <div className={s.arrowContainer}>
        <button className={s.backButton} onClick={handleBack}>
          <VscArrowLeft size={16} />
        </button>
      </div>
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
