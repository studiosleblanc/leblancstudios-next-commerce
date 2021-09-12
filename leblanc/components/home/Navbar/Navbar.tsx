import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { SearchIcon } from '@leblanc/icons'
import { LogoHorizontal } from '@leblanc/svg'
import s from './Navbar.module.css'
import animation from './animations'
import ClickOutside from '@lib/click-outside'
import { homeNavigation } from '@leblanc/data/home-navigation'
import type { NavItem } from '@leblanc/data/home-navigation'
import { NavPanel } from '@leblanc/components/home'

const Navbar: FC = () => {
  const [activeItem, setActiveItem] = useState('')
  // const [activeChilds, setActiveChilds] = useState<NavItem>(null)

  const handleActiveItem = (event: React.MouseEvent, target: string) => {
    event.preventDefault()
    setActiveItem(target)
  }

  useEffect(() => {
    // console.log(activeItem)
    // const currentChilds = homeNavigation.find(
    //   parentItem => parentItem.id === activeItem
    // )
    // if (currentChilds) {
    //   setActiveChilds(currentChilds)
    // }
  }, [activeItem])

  return (
    <div className={s.root}>
      <ClickOutside
        active={activeItem === '' ? false : true}
        onClick={() => setActiveItem('')}>
        <motion.div
          initial="exit"
          animate={activeItem ? 'enter' : 'exit'}
          variants={animation.navbar}
          className={s.navbar}>
          <motion.div
            className={s.topRow}
            initial="exit"
            animate={activeItem ? 'enter' : 'exit'}
            variants={animation.topRow}>
            <div className={s.toolbar}>
              <ul className={s.menu}>
                {homeNavigation.map((navItem: NavItem) => (
                  <li key={navItem.id}>
                    {navItem.childs ? (
                      <a href="#" onClick={e => handleActiveItem(e, navItem.id)}>
                        {navItem.label}
                      </a>
                    ) : (
                      <NextLink href={navItem.href || ''}>
                        <a>{navItem.label}</a>
                      </NextLink>
                    )}
                  </li>
                ))}
              </ul>
              <div className={s.search}>
                <form>
                  <div className={s.searchGroup}>
                    <input
                      type="text"
                      name="search"
                      id=""
                      placeholder="search..."
                      className={s.searchInput}
                    />
                    <button type="submit" className={s.searchButton}>
                      <SearchIcon />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <motion.div
              initial="exit"
              animate={activeItem ? 'enter' : 'exit'}
              variants={animation.collapse}
              className={cn(s.collapse, s.collapseTop)}>
              <div className={s.collapseTopContent}>
                <NavPanel navItems={homeNavigation} activeItem={activeItem} />
              </div>
              <motion.div
                initial="exit"
                animate={activeItem ? 'enter' : 'exit'}
                variants={animation.rightBar}
                className={s.rightBar}>
                <motion.span
                  initial="exit"
                  animate={activeItem ? 'enter' : 'exit'}
                  variants={animation.breadcrumbs}
                  className={s.breadcrumbs}>
                  {homeNavigation.find(item => item.id === activeItem)?.label}
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="exit"
            animate={activeItem ? 'enter' : 'exit'}
            variants={animation.bottomRow}
            className={s.bottomRow}>
            <motion.div
              initial="exit"
              animate={activeItem ? 'enter' : 'exit'}
              variants={animation.collapse}
              className={cn(s.collapse, s.collapseBottom)}>
              <motion.div
                initial="exit"
                animate={activeItem ? 'enter' : 'exit'}
                variants={animation.rightBar}
                className={s.rightBar}></motion.div>
            </motion.div>
            <motion.div
              initial="exit"
              animate={activeItem ? 'enter' : 'exit'}
              variants={animation.bottomRowFooter}
              className={s.bottomRowFooter}>
              <LogoHorizontal width={120} height="auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </ClickOutside>
    </div>
  )
}

export default Navbar
