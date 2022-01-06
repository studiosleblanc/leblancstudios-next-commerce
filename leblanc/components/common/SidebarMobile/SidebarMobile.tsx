import React, { useState, useEffect } from 'react'
import s from './SidebarMobile.module.css'
import { useUI } from '@components/ui/context'
import { SearchIcon } from '@leblanc/icons'
import NavMobile from '../NavMobile'

const SidebarMobile = () => {
  const { displayMobileSidebar } = useUI()
  return displayMobileSidebar ? (
    <div className={s.root}>
      <div className={s.navCol}>
        <NavMobile />
      </div>
      <div className={s.searchCol}>
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
  ) : null
}

export default SidebarMobile
