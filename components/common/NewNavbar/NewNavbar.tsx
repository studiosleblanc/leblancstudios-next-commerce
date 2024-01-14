import { FC } from 'react'
import Link from 'next/link'
import s from './NewNavbar.module.css'
import NavbarRoot from '../Navbar/NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { HeaderLogos } from '@leblanc/components/common'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <HeaderLogos />
          {/* <a className={s.logo} aria-label="Logo">
          </a> */}
          {/* <Link href="/">
          </Link> */}
          {/* <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>All</a>
            </Link>
            {links?.map(l => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav> */}
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <ul className="flex items-center justify-end flex-1 space-x-8">
          <li>HISTORIA</li>
          <UserNav />
        </ul>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
