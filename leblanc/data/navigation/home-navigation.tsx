import React from 'react'
import newArrivalsItems from './new-arrivals'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  href?: string
  childs?: NavItem[]
}

const newArrivals: NavItem[] = [
  {
    id: 'women',
    label: 'Womens',
    childs: newArrivalsItems.womens,
  },
  {
    id: 'men',
    label: 'Mens',
    childs: newArrivalsItems.mens,
  },
  {
    id: 'all',
    label: 'All',
    href: '#',
  },
  {
    id: 'A-Necessary-Risk-x-Gus-Pena',
    label: (
      <>
        A Necessary Risk <b>x Gus Peña</b>
      </>
    ),
    childs: newArrivalsItems.aNecessaryRisk,
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal',
    label: (
      <>
        'SS21 '<b>[Timeless Duck Shirt: Intimo y Personal]</b>
      </>
    ),
    childs: newArrivalsItems.ss21,
  },
  {
    id: 'white-nacked-duck',
    label: 'White Naked Duck',
    childs: newArrivalsItems.whiteNakedDuck,
  },
]

export const homeNavigation: NavItem[] = [
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    childs: newArrivals,
  },
  {
    id: 'womens',
    label: 'Womens',
    href: '#',
  },
  {
    id: 'mens',
    label: 'Mens',
    href: '#',
  },
  {
    id: 'history',
    label: 'History',
    href: '#',
  },
  {
    id: 'archives',
    label: 'Archives',
    href: '#',
  },
]
