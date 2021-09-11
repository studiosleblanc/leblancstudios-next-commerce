import React, { FC } from 'react'
import s from './NavPanel.module.css'
import type { NavItem } from '@leblanc/data/home-navigation'

interface Props {
  navItems: NavItem[]
}

const NavPanel: FC<Props> = ({ navItems }) => {
  // console.log(navItems)
  return (
    <div>
      {navItems.map((item: NavItem) => {
        item.childs && (
          <ul className={s.root} key={item.id}>
            {item.childs?.map(childItem => {
              childItem.childs ? (
                <h1 key={childItem.id}>{childItem.label}</h1>
              ) : (
                <li key={childItem.id}>
                  <a href={childItem.href}>{childItem.label}</a>
                </li>
              )
            })}
          </ul>
        )
      })}
    </div>
  )
}

export default NavPanel
