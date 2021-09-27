import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './Header.module.css'
import { CartIcon } from '@leblanc/icons'
import { homeNavigation } from '@leblanc/data/navigation'
import { useBreadcrumbs } from '@leblanc/hooks/useBreadcrumbs'
import { GoChevronRight } from 'react-icons/go'
import ElPuebloCuestiona from '@leblanc/svg/ElPuebloCuestiona'

interface Props {
  history?: boolean
}

const Header: FC<Props> = ({ history }) => {
  const router = useRouter()
  const { asPath } = router
  const { theme, setTheme } = useTheme()
  const breadcrumbs = useBreadcrumbs(asPath)

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
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              darkmode
            </button>
          </li>
          <li>My Account</li>
          <li className="flex">
            <span className="relative">
              <span className={s.cartItemsCounter}>4</span>
              <CartIcon width={28} className={s.cartIcon} />
            </span>
            <span className={s.totalPrice}>
              <span> $835.00</span>
            </span>
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
          <div className={s.position}>
            {breadcrumbs.length === 3 && (
              <>
                {breadcrumbs[1].abbr ? breadcrumbs[1].abbr : breadcrumbs[1].label}
                <span>{'>'}</span>
                {breadcrumbs[2].handle}
              </>
            )}
            {breadcrumbs.length === 2 && (
              <>
                {breadcrumbs[0].abbr ? breadcrumbs[0].abbr : breadcrumbs[0].label}
                <span>{'>'}</span>
                {breadcrumbs[1].handle}
              </>
            )}
            {breadcrumbs.length === 1 && <>{breadcrumbs[0].label}</>}
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
                      <li>
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
                      <li>
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
