export type NavItem = {
  id: string
  label: string
  href?: string
  childs?: NavItem[]
}

const newArrivalsChilds: NavItem[] = [
  {
    id: 'women',
    label: 'Women',
    href: '#',
  },
  {
    id: 'men',
    label: 'Men',
    href: '#',
  },
  {
    id: 'all',
    label: 'All',
    href: '#',
  },
  {
    id: 'A-Necessary-Risk-x-Gus-Pena',
    label: 'A Necessary Risk x Gus Pena',
    href: '#',
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal',
    label: 'SS21 [Timeless Duck Shirt: Intimo y Personal]',
    href: '#',
  },
  {
    id: 'white-nacked-duck',
    label: 'White Nacked Duck',
    href: '#',
  },
]

const mensChilds: NavItem[] = [
  {
    id: 'all',
    label: 'all',
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
