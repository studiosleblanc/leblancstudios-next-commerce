import { homeNavigation, NavItem } from '@leblanc/data/navigation'
import { useState, useEffect } from 'react'

export function usePathItems(asPath: string) {
  const [pathItems, setPathItems] = useState<string[]>([])
  const [navItems, setNavItems] = useState<NavItem[]>([])

  useEffect(() => {
    const cleanPath = asPath.split('#')[0]
    const path = cleanPath.split('?')[0]
    let items = path.split('/').slice(1)
    setPathItems(items)
  }, [asPath])

  useEffect(() => {
    const data = getPathItemsData()
    setNavItems(data)
  }, [pathItems])

  const getPathItemsData = () => {
    const items = []
    const obj1 = homeNavigation.find(i => i.handle === pathItems[0])
    if (obj1) {
      items.push(obj1)
      const obj2 = obj1.childs?.find(i => i.handle === pathItems[1])
      if (obj2) {
        items.push(obj2)
        const obj3 = obj2.childs?.find(i => i.handle === pathItems[2])
        if (obj3) {
          items.push(obj3)
        }
      }
    }
    return items
  }

  return { navItems, pathItems }
}
