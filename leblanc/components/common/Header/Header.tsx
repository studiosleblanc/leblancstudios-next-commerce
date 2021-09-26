import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './Header.module.css'
import { CartIcon } from '@leblanc/icons'
import { homeNavigation } from '@leblanc/data/navigation'

const Header: FC = () => {
  return (
    <header className={s.root}>
      <div className={s.topRow}>
        <Link href="/">
          <a>
            <Image
              width={308}
              height={26}
              layout="intrinsic"
              src="/assets/images/remain_silent.png"
            />
          </a>
        </Link>
        <ul className={s.toolbar}>
          <li>My Account</li>
          <li className="flex">
            <span className="relative">
              <span className={s.cartItemsCounter}>4</span>
              <CartIcon width={28} />
            </span>
            <span className={s.totalPrice}>
              <span> $835.00</span>
            </span>
          </li>
        </ul>
      </div>
      <div className={s.bottomRow}>
        <div className={s.breadcrumbs}>new arrivals {'>'} mens</div>
        <div className={s.navbar}>
          <div className={s.position}>Mens {'>'} All</div>
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
                <li>Shirts</li>
                <li>T-Shirts</li>
                <li>Trousers</li>
                <li>Accesories</li>
                <li>Knitwear</li>
                <li>Caps</li>
                <li>Leathergoods</li>
                <li>Gifts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
