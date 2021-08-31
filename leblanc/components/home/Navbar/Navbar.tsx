import { SearchIcon } from '@leblanc/icons'
import React, { FC } from 'react'
import s from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.navbar}>
        <div className={s.topRow}>
          <div className={s.toolbar}>
            <ul className={s.menu}>
              <li>
                <a href="">New Arrivals</a>
              </li>
              <li>
                <a href="">Womens</a>
              </li>
              <li>
                <a href="">Mens</a>
              </li>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Archives</a>
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
        </div>
        <div className={s.bottomRow}></div>
      </div>
    </div>
  )
}

export default Navbar
