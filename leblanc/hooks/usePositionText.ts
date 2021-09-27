import React, { useState, useEffect } from 'react'
import { NavItem } from '@leblanc/data/navigation'

export default function usePositionText(breadcrumbs: NavItem[]) {
  const length = breadcrumbs.length
  const [firstText, setFirstText] = useState<React.ReactNode | string>('')
  const [lastText, setLastText] = useState<React.ReactNode | string>('')

  useEffect(() => {
    const ft = getBreadcrumbText(2)
    const lt = getBreadcrumbText(1)
    setFirstText(ft)
    if (length > 1) {
      setLastText(lt)
    }
  }, [breadcrumbs])

  const getBreadcrumbText = (i: number) => {
    if (length > 1 && length > 0) {
      return breadcrumbs[length - i].abbr ?? breadcrumbs[length - i].label
    }
    if (length === 1) {
      return breadcrumbs[0].label
    }
  }

  return [firstText, lastText].filter(i => i)
}
