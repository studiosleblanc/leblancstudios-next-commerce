import React from 'react'
import newArrivals from './newArrivals'
import mens from './mens'
import womens from './womens'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  handle: string
  abbr?: string
  href?: string
  childs?: NavItem[]
}

export const homeNavigation: NavItem[] = [
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    handle: 'new-arrivals',
    childs: newArrivals,
  },
  {
    id: 'womens',
    label: 'Womens',
    handle: 'womens',
    childs: womens,
  },
  {
    id: 'mens',
    label: 'Mens',
    handle: 'mens',
    childs: mens,
  },
  {
    id: 'history',
    label: 'History',
    handle: 'history',
    href: '/history',
  },
  {
    id: 'archives',
    label: 'Archives',
    handle: 'archives',
    href: '/',
  },
]
