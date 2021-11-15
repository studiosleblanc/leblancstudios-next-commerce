import type { NavItem } from '@leblanc/data/navigation'
import womens from './na_womens'
import mens from './na_mens'
import aNecessaryRisk from './na_aNecessaryRisk'
import ss21 from './na_ss21'
import whiteNakedDuck from './na_whiteNakedDuck'

const newArrivals: NavItem[] = [
  {
    id: 'women-iojewi33',
    label: 'Womens',
    handle: 'womens',
    childs: womens,
    href: '/new-arrivals/womens/all',
  },
  {
    id: 'men-43789hd',
    label: 'Mens',
    handle: 'mens',
    childs: mens,
    href: '/new-arrivals/mens/all',
  },
  {
    id: 'all-d78ga',
    label: 'All',
    handle: 'all',
    href: '/new-arrivals/all',
    slug: 'new-arrivals-all'
  },
  {
    id: 'A-Necessary-Risk-x-Gus-Pena-da89',
    label: (
      <>
        A Necessary Risk <b>x Gus Peña</b>
      </>
    ),
    handle: 'a-necessary-risk-x-gus-pena',
    abbr: 'ANR',
    childs: aNecessaryRisk,
    href: '/new-arrivals/a-necessary-risk-x-gus-pena/shirts',
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal-ad78tf',
    label: (
      <>
        SS21 <b>[Timeless Duck Shirt: Intimo y Personal]</b>
      </>
    ),
    handle: 'ss21',
    abbr: 'SS21',
    childs: ss21,
    href: '/new-arrivals/ss21/shirts',
  },
  {
    id: 'white-nacked-duck-da78t',
    label: 'White Naked Duck',
    handle: 'white-naked-duck',
    abbr: 'WND',
    childs: whiteNakedDuck,
    href: '/new-arrivals/white-naked-duck/shirts',
  },
]

export default newArrivals
