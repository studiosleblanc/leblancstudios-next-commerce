import { FC } from 'react'
import Link from 'next/link'
import s from './NewHeader.module.css'
import NavbarRoot from '../Navbar/NavbarRoot'
import { useUI } from '@components/ui/context'
import useCart from '@framework/cart/use-cart'
import type { LineItem } from '@commerce/types/cart'
import { Logo, Container } from '@components/ui'
import { CartIcon } from '@leblanc/icons'
import usePrice from '@commerce/product/use-price'
import { Searchbar, UserNav } from '@components/common'
import { HeaderLogos } from '@leblanc/components/common'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const Navbar: FC<NavbarProps> = ({ links }) => {
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const { data } = useCart()

  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  // totalPrice
  const { price: totalPrice } = usePrice({
    amount: data?.lineItemsSubtotalPrice || 0,
    baseAmount: data?.lineItemsSubtotalPrice || 0,
    currencyCode: data?.currency.code!,
  })

  return (
    <NavbarRoot>
      <div className={s.nav}>
        <div className={s.logoContainer}>
          <HeaderLogos />
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className={s.searchContainer}>
            <Searchbar />
          </div>
        )}
        <ul className={s.toolbar}>
          <li>HISTORY</li>
          <li className="font-extrabold">Bag</li>
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
        </ul>
      </div>
    </NavbarRoot>
  )
}

export default Navbar
