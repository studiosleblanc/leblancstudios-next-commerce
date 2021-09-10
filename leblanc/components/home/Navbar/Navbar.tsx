import React, { FC, useState, useEffect } from 'react'
import { SearchIcon } from '@leblanc/icons'
import s from './Navbar.module.css'

const Navbar: FC = () => {
  const [activeChild, setActiveChild] = useState('')

  const handleActiveChild = (event: React.MouseEvent, target: string) => {
    event.preventDefault()
    setActiveChild(target)
  }

  useEffect(() => {
    console.log(activeChild)
  }, [activeChild])

  return (
    <div className={s.root}>
      <div className={s.navbar}>
        <div className={s.topRow}>
          <div className={s.toolbar}>
            <ul className={s.menu}>
              <li>
                <a href="#" onClick={e => handleActiveChild(e, 'tab-1')}>
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" onClick={e => handleActiveChild(e, 'tab-2')}>
                  Womens
                </a>
              </li>
              <li>
                <a href="#" onClick={e => handleActiveChild(e, 'tab-3')}>
                  Mens
                </a>
              </li>
              <li>
                <a href="#" onClick={e => handleActiveChild(e, 'tab-4')}>
                  History
                </a>
              </li>
              <li>
                <a href="#" onClick={e => handleActiveChild(e, 'tab-5')}>
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
          <div className={s.collapseTop}>1</div>
        </div>
        <div className={s.bottomRow}>
          {/* {
            activeChild !== '' && (
            )
          } */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
