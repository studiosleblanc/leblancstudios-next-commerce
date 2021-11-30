import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './Header.module.css'
import { CartIcon } from '@leblanc/icons'
import { homeNavigation } from '@leblanc/data/navigation'
import { usePathItems } from '@leblanc/hooks/usePathItems'
import { GoChevronRight } from 'react-icons/go'
import { VscChevronRight } from 'react-icons/vsc'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'
import ElPuebloCuestiona from '@leblanc/svg/ElPuebloCuestiona'
import usePositionText from '@leblanc/hooks/usePositionText'
import useCart from '@framework/cart/use-cart'
import usePrice from '@commerce/product/use-price'
import { useUI } from '@components/ui/context'
import type { LineItem } from '@commerce/types/cart'

interface Props {
  history?: boolean
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const Header: FC<Props> = ({ history }) => {
  const router = useRouter()
  const { asPath } = router
  const { theme, setTheme } = useTheme()
  const breadcrumbs = usePathItems(asPath)
  const positionItems = usePositionText(breadcrumbs)
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const { data } = useCart()

  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  console.log(breadcrumbs)
  // console.log(data)

  const getFitFontStyles = (items: string[] | React.ReactNode[]) => {
    let length: number = 0
    items.forEach(i => {
      length += String(i).length
    })
    return {
      fontSize: `${300 / (length * 10)}rem`,
      fontWeight: length > 14 ? 400 : 300,
    }
  }

  // totalPrice
  const { price: totalPrice } = usePrice({
    amount: data?.lineItemsSubtotalPrice || 0,
    baseAmount: data?.lineItemsSubtotalPrice || 0,
    currencyCode: data?.currency.code!,
  })

  return (
    <header className={s.root}>
      <div className={s.topRow}>
        <Link href="/">
          <a className={s.logoContainer}>
            {history && <ElPuebloCuestiona />}
            {!history && (
              <Image
                width={308}
                height={26}
                layout="intrinsic"
                src="/assets/images/remain_silent.png"
              />
            )}
          </a>
        </Link>
        <ul className={s.toolbar}>
          <li>
            <button
              className={s.darkModeButton}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="dark mode">
              {theme === 'light' ? (
                <IoSunnyOutline size={22} />
              ) : (
                <IoMoonOutline size={20} />
              )}
            </button>
          </li>
          <li className="pb-1">My Account</li>
          <li>
            <button
              className={s.cartButton}
              onClick={toggleSidebar}
              aria-label="open cart">
              <span className="relative">
                <span className={s.cartItemsCounter}>
                  {itemsCount > 0 ? itemsCount : 0}
                </span>
                <CartIcon width={28} className={s.cartIcon} />
              </span>
              <span className={s.totalPrice}>
                <span> {totalPrice}</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className={s.bottomRow}>
        <div className={s.breadcrumbs}>
          {breadcrumbs.length >= 3 && (
            <>
              {breadcrumbs[0].label}
              <span>
                <GoChevronRight size={14} />
              </span>
              {breadcrumbs[1].label}
            </>
          )}
        </div>
        <div className={s.navbar}>
          <div style={getFitFontStyles(positionItems)} className={s.position}>
            {positionItems.map((pItem, i) => (
              <React.Fragment key={i}>
                {i >= 1 && (
                  <span>
                    <VscChevronRight />
                  </span>
                )}
                <div>{pItem}</div>
              </React.Fragment>
            ))}
          </div>
          <div className={s.navigation}>
            <div className={s.navigationTop}>
              <div className={s.navigationTopBox}>
                <ul className={cn(s.menu, s.menuTop)}>
                  {homeNavigation.map(navItem => (
                    <li key={navItem.id}>
                      {navItem.href ? (
                        <Link href={navItem.href}>
                          <a>{navItem.label}</a>
                        </Link>
                      ) : (
                        <a>{navItem.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.navigationBottom}>
              <ul className={cn(s.menu, s.menuBottom)}>
                {breadcrumbs.length === 3 &&
                  homeNavigation
                    .find(i => i.handle === breadcrumbs[0].handle)
                    ?.childs?.find(child => child.handle === breadcrumbs[1].handle)
                    ?.childs?.map(navItem => (
                      <li key={navItem.id}>
                        {navItem.href ? (
                          <Link href={navItem.href}>
                            <a>{navItem.label}</a>
                          </Link>
                        ) : (
                          <a>{navItem.label}</a>
                        )}
                      </li>
                    ))}
                {breadcrumbs.length === 2 &&
                  homeNavigation
                    .find(i => i.handle === breadcrumbs[0].handle)
                    ?.childs?.map(navItem => (
                      <li key={navItem.id}>
                        {navItem.href ? (
                          <Link href={navItem.href}>
                            <a>{navItem.abbr ? navItem.abbr : navItem.label}</a>
                          </Link>
                        ) : (
                          <a>{navItem.abbr ? navItem.abbr : navItem.label}</a>
                        )}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
