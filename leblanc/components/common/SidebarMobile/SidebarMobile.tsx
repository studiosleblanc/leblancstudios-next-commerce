import React from 'react'
import s from './SidebarMobile.module.css'
import { useUI } from '@components/ui/context'

const SidebarMobile = () => {
  const { displayMobileSidebar, closeMobileSidebar } = useUI()
  return displayMobileSidebar ? <div className={s.root}>sidebar</div> : null
}

export default SidebarMobile
