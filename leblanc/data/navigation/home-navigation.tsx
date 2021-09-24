import React from 'react'
import newArrivalsItems from './new-arrivals'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  abbr?: string
  href?: string
  childs?: NavItem[]
}

const newArrivals: NavItem[] = [
  {
    id: 'women-iojewi33',
    label: 'Womens',
    childs: newArrivalsItems.womens,
  },
  {
    id: 'men-43789hd',
    label: 'Mens',
    childs: newArrivalsItems.mens,
  },
  {
    id: 'all-d78ga',
    label: 'All',
    href: '#',
  },
  {
    id: 'A-Necessary-Risk-x-Gus-Pena-da89',
    label: (
      <>
        A Necessary Risk <b>x Gus Peña</b>
      </>
    ),
    abbr: 'ANR',
    childs: newArrivalsItems.aNecessaryRisk,
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal-ad78tf',
    label: (
      <>
        'SS21 '<b>[Timeless Duck Shirt: Intimo y Personal]</b>
      </>
    ),
    abbr: 'SS21',
    childs: newArrivalsItems.ss21,
  },
  {
    id: 'white-nacked-duck-da78t',
    label: 'White Naked Duck',
    abbr: 'WND',
    childs: newArrivalsItems.whiteNakedDuck,
  },
]

const womens: NavItem[] = [
  {
    id: 'all-eda32fzdg',
    label: 'All',
    href: '#',
  },
  {
    id: 'shirts-dsa2356daA',
    label: 'Shirts',
    href: '#',
  },
  {
    id: 't-Shirt-fsndf87gs',
    label: 'T-Shirt',
    href: '#',
  },
  {
    id: 'dresses-887tq6f734',
    label: 'Dresses',
    href: '#',
  },
  {
    id: 'trousers-ygfw77g8',
    label: 'Trousers',
    href: '#',
  },
  {
    id: 'accesories-dkuq22d',
    label: 'Accesories',
    href: '#',
  },
  {
    id: 'caps-62a8S99dh6',
    label: 'Caps',
    href: '#',
  },
  {
    id: 'leather-Goods-90h894qggsjkfs',
    label: 'Leather Goods',
    href: '#',
  },
]

const mens: NavItem[] = [
  {
    id: 'all-67fjhj',
    label: 'All',
    href: '#',
  },
  {
    id: 'shirts-56s324s',
    label: 'Shirts',
    href: '#',
  },
  {
    id: 't-Shirt-6e326d45s',
    label: 'T-Shirt',
    href: '#',
  },
  {
    id: 'trousers-gr344s',
    label: 'Trousers',
    href: '#',
  },
  {
    id: 'accesories-6r433sd',
    label: 'Accesories',
    href: '#',
  },
  {
    id: 'caps-67gdfd54',
    label: 'Caps',
    href: '#',
  },
  {
    id: 'leather-Goods-i809js3f765',
    label: 'Leather Goods',
    href: '#',
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
    childs: womens,
  },
  {
    id: 'mens',
    label: 'Mens',
    childs: mens,
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
