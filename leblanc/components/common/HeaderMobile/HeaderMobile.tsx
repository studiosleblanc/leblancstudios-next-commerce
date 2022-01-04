import React from 'react'
import { HeaderLogos } from '..'
import { CartIcon, MenuIcon } from '@leblanc/icons'
import { useUI } from '@components/ui/context'
import s from './HeaderMobile.module.css'
import { DarkModeSwitcher } from '@leblanc/components/ui'

const HeaderMobile = () => {
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <div className={s.logosContainer}>
          <HeaderLogos />
        </div>
        <ul className={s.toolbar}>
          <li>
            <DarkModeSwitcher />
          </li>
          <li>
            <button onClick={toggleSidebar} aria-label="open cart">
              <CartIcon className={s.cartIcon} />
            </button>
          </li>
          <li>
            <button aria-label="open menu">
              <MenuIcon className={s.menuIcon} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderMobile
