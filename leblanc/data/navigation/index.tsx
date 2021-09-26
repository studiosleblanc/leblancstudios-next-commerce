import React from 'react'
import newArrivals from './newArrivals'
import mens from './mens'
import womens from './womens'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  abbr?: string
  href?: string
  childs?: NavItem[]
}

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
    href: '/history',
  },
  {
    id: 'archives',
    label: 'Archives',
    href: '#',
  },
]
