import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { SearchIcon } from '@leblanc/icons'
import { LogoHorizontal } from '@leblanc/svg'
import s from './Navbar.module.css'
import animation from './animations'
import ClickOutside from '@lib/click-outside'

const Navbar: FC = () => {
  const [activeItem, setActiveItem] = useState('')

  const handleActiveItem = (event: React.MouseEvent, target: string) => {
    event.preventDefault()
    setActiveItem(target)
  }

  useEffect(() => {
    console.log(activeItem)
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
                <li>
                  <a href="#" onClick={e => handleActiveItem(e, 'tab-1')}>
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" onClick={e => handleActiveItem(e, 'tab-2')}>
                    Womens
                  </a>
                </li>
                <li>
                  <a href="#" onClick={e => handleActiveItem(e, 'tab-3')}>
                    Mens
                  </a>
                </li>
                <li>
                  <a href="#" onClick={e => handleActiveItem(e, 'tab-4')}>
                    History
                  </a>
                </li>
                <li>
                  <a href="#" onClick={e => handleActiveItem(e, 'tab-5')}>
                    Archives
                  </a>
                </li>
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
              <motion.div
                initial="exit"
                animate={activeItem ? 'enter' : 'exit'}
                variants={animation.collapseTopContent}
                className={s.collapseTopContent}>
                <ul className={s.menuChild}>
                  <li>
                    <a href="#">Womens</a>
                  </li>
                  <li>
                    <a href="#">Mens</a>
                  </li>
                  <li>
                    <a href="#">All</a>
                  </li>
                  <li>
                    <a href="#">
                      A Necessary Risk <b>x Gus Pena</b>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      SS21 <b>[Timeless Duck Shirt: Intimo y Personal]</b>
                    </a>
                  </li>
                  <li>
                    <a href="#">White Nacked Duck</a>
                  </li>
                </ul>
              </motion.div>
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
                  New Arrivals
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
