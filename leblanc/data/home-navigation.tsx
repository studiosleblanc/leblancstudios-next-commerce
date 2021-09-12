import React from 'react'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  href?: string
  childs?: NavItem[]
}

const mensChilds: NavItem[] = [
  {
    id: 'all',
    label: 'All',
    href: '#',
  },
  {
    id: 'shirts',
    label: 'Shirts',
    href: '#',
  },
  {
    id: 't-Shirt',
    label: 'T-Shirt',
    href: '#',
  },
  {
    id: 'trousers',
    label: 'Trousers',
    href: '#',
  },
  {
    id: 'accesories',
    label: 'Accesories',
    href: '#',
  },
  {
    id: 'caps',
    label: 'Caps',
    href: '#',
  },
  {
    id: 'leather-Goods',
    label: 'Leather Goods',
    href: '#',
  },
]
const newArrivalsChilds: NavItem[] = [
  {
    id: 'women',
    label: 'Womens',
    href: '#',
  },
  {
    id: 'men',
    label: 'Mens',
    childs: [...mensChilds],
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
    href: '#',
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal',
    label: (
      <>
        'SS21 '<b>[Timeless Duck Shirt: Intimo y Personal]</b>
      </>
    ),
    href: '#',
  },
  {
    id: 'white-nacked-duck',
    label: 'White Nacked Duck',
    href: '#',
  },
]

export const homeNavigation: NavItem[] = [
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    childs: [...newArrivalsChilds],
  },
  {
    id: 'womens',
    label: 'Womens',
    href: '#',
  },
  {
    id: 'mens',
    label: 'Mens',
    childs: [...mensChilds],
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
