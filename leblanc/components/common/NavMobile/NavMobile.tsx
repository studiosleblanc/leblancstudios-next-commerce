import React, { useState, useEffect } from 'react'
import s from './NavMobile.module.css'
import NextLink from 'next/link'
import cn from 'classnames'
import { useUI } from '@components/ui/context'
import { homeNavigation, NavItem } from '@leblanc/data/navigation'
import { VscClose } from 'react-icons/vsc'
import { GoChevronRight } from 'react-icons/go'
import { VscChevronRight } from 'react-icons/vsc'

const NavMobile = () => {
  const { closeMobileSidebarIfPresent } = useUI()
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)
  const [activeChildItem, setActiveChildItem] = useState<NavItem | null>(null)

  const [parentLabel, setParentLabel] = useState<React.ReactNode | string>('')
  const [childLabel, setChildLabel] = useState<React.ReactNode | string>('')

  const handleLinkClick = () => {
    closeMobileSidebarIfPresent()
  }

  const handleParentBack = () => {
    setActiveItem(null)
    setParentLabel('')
  }
  const handleGrandChildBack = () => {
    setActiveChildItem(null)
    setChildLabel('')
  }

  useEffect(() => {
    if (activeItem) {
      setParentLabel(activeItem.label)
    }
    if (activeChildItem) {
      setChildLabel(
        activeChildItem.abbr ? activeChildItem.abbr : activeChildItem.label
      )
    }
  }, [activeItem, activeChildItem])

  return (
    <nav className={s.nav}>
      {!activeItem && !activeChildItem && (
        <ul className={s.menu}>
          {homeNavigation.map((item: NavItem) => (
            <React.Fragment key={item.id}>
              {item.noNav ? null : (
                <li>
                  {item.childs ? (
                    <button
                      className={s.navItem}
                      onClick={() => setActiveItem(item)}>
                      <span>{item.label}</span>
                      {item.childs && (
                        <VscChevronRight size={11} className={s.navItemChevron} />
                      )}
                    </button>
                  ) : (
                    item.href && (
                      <NextLink href={item.href || ''}>
                        <a className={s.navItem} onClick={handleLinkClick}>
                          <span>{item.label}</span>
                        </a>
                      </NextLink>
                    )
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}

      {/* CHILDS (1st level) */}
      {activeItem?.childs && !activeChildItem && (
        <div className={s.childPanel}>
          <ul className={s.menu}>
            <li className={cn(s.navItem, s.childHeader)}>
              <button onClick={handleParentBack}>
                <VscClose size={14} />
              </button>
              <span>{parentLabel}</span>
            </li>
            {activeItem.childs.map((item: NavItem) => (
              <React.Fragment key={item.id}>
                {item.noNav ? null : (
                  <li key={item.id}>
                    {item.childs ? (
                      <button
                        className={s.navItem}
                        onClick={() => setActiveChildItem(item)}>
                        <span>{item.label}</span>
                        {item.childs && (
                          <VscChevronRight size={11} className={s.navItemChevron} />
                        )}
                      </button>
                    ) : (
                      item.href && (
                        <NextLink href={item.href || ''}>
                          <a className={s.navItem} onClick={handleLinkClick}>
                            <span>{item.label}</span>
                          </a>
                        </NextLink>
                      )
                    )}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}

      {/* GRANDCHILDS (2nd level) */}
      {activeChildItem?.childs && (
        <div className={s.childPanel}>
          <ul className={s.menu}>
            <li className={cn(s.navItem, s.childHeader)}>
              <button onClick={handleGrandChildBack}>
                <VscClose size={14} />
              </button>
              <span className={s.childHeaderTitle}>
                <span>{parentLabel}</span>
                <GoChevronRight size={11} />
                <span>{childLabel}</span>
              </span>
            </li>
            {activeChildItem.childs.map((item: NavItem) => (
              <React.Fragment key={item.id}>
                {item.noNav ? null : (
                  <li key={item.id}>
                    {item.href && (
                      <NextLink href={item.href || ''}>
                        <a className={s.navItem} onClick={handleLinkClick}>
                          <span>{item.label}</span>
                        </a>
                      </NextLink>
                    )}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavMobile
