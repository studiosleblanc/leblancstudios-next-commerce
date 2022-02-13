import React from 'react'
import newArrivals from './newArrivals'
import mens from './mens'
import womens from './womens'
import archives from './archives'
// this file contains all remaining paths
import collections from './collections'

export type NavItem = {
  id: string
  label: string | React.ReactNode
  handle: string                     // Url path handle
  abbr?: string
  href?: string                      // Full url path
  childs?: NavItem[]
  slug?: string                      // Collection handle
  noNav?: boolean
}

export const homeNavigation: NavItem[] = [
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    handle: 'new-arrivals',
    childs: newArrivals,
    href: '/new-arrivals/all',
  },
  {
    id: 'womens',
    label: 'Womens',
    handle: 'womens',
    childs: womens,
    href: '/womens/all',
  },
  {
    id: 'mens',
    label: 'Mens',
    handle: 'mens',
    childs: mens,
    href: '/mens/all',
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
    childs: archives,
    href: '/archives/all',
  },
  {
    id: 'collection', // hidden links
    label: 'Collection',
    handle: 'collection',
    href: '/collection/all',
    childs: collections,
    noNav: true,
  },
]
