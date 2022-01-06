import React from 'react'
import s from './SidebarMobile.module.css'
import { useUI } from '@components/ui/context'
import { SearchIcon } from '@leblanc/icons'
import { homeNavigation, NavItem } from '@leblanc/data/navigation'
import { GoChevronRight } from 'react-icons/go'
import { VscChevronRight } from 'react-icons/vsc'

const SidebarMobile = () => {
  const { displayMobileSidebar } = useUI()
  return displayMobileSidebar ? (
    <div className={s.root}>
      <div className={s.navCol}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            {homeNavigation.map((item: NavItem) => (
              <li>
                <button className={s.navItem}>
                  {item.label}
                  {item.childs && (
                    <VscChevronRight size={11} className={s.navItemChevron} />
                  )}
                </button>
                {item.childs && (
                  <ul className={s.menuChild}>
                    {item.childs.map((childItem: NavItem) => (
                      <li>
                        <button className={s.navItem}>
                          {childItem.label}
                          {childItem.childs && (
                            <VscChevronRight
                              size={11}
                              className={s.navItemChevron}
                            />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
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
