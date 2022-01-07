import React, { FC } from 'react'
import s from './HeaderMobile.module.css'
import { HeaderLogos } from '..'
import { CartIcon, MenuIcon } from '@leblanc/icons'
import { useUI } from '@components/ui/context'
import { motion } from 'framer-motion'
import { DarkModeSwitcher } from '@leblanc/components/ui'

interface Props {
  noDMSwitcher?: boolean
}

const HeaderMobile: FC<Props> = ({ noDMSwitcher = false }) => {
  const {
    toggleSidebar,
    toggleMobileSidebar,
    closeMobileSidebarIfPresent,
    displayMobileSidebar,
  } = useUI()

  const handleOpenCart = () => {
    closeMobileSidebarIfPresent()
    toggleSidebar()
  }

  const topBar = {
    enter: {
      rotate: 135,
    },
    exit: {
      rotate: 0,
    },
  }
  const middleBar = {
    show: {
      display: 'block',
    },
    hide: {
      display: 'none',
    },
  }
  const bottomBar = {
    enter: {
      rotate: 45,
    },
    exit: {
      rotate: 0,
    },
  }

  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <div className={s.logosContainer}>
          <HeaderLogos />
        </div>
        <ul className={s.toolbar}>
          {!noDMSwitcher && (
            <li>
              <DarkModeSwitcher />
            </li>
          )}
          <li>
            <button onClick={handleOpenCart} aria-label="open cart">
              <CartIcon className={s.cartIcon} />
            </button>
          </li>
          <li>
            <button
              className={s.menuButton}
              onClick={toggleMobileSidebar}
              aria-label="open menu">
              {/* <MenuIcon className={s.menuIcon} /> */}
              <motion.span
                className={displayMobileSidebar ? 'absolute' : ''}
                animate={displayMobileSidebar ? 'enter' : 'exit'}
                variants={topBar}></motion.span>
              <motion.span
                className={displayMobileSidebar ? 'absolute' : ''}
                animate={displayMobileSidebar ? 'hide' : 'show'}
                variants={middleBar}></motion.span>
              <motion.span
                className={displayMobileSidebar ? 'absolute' : ''}
                animate={displayMobileSidebar ? 'enter' : 'exit'}
                variants={bottomBar}></motion.span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderMobile
