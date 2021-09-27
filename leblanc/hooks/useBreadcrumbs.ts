import { useState, useEffect } from 'react'

export function useBreadcrumbs(asPath: string) {
  const [pathItems, setPathItems] = useState<string[]>([])

  useEffect(() => {
    const cleanPath = asPath.split('#')[0]
    const path = cleanPath.split('?')[0]
    let items = path.split('/').slice(1)
    items = items.map(item => item.replace('-', ' '))
    setPathItems(items)
  }, [asPath])

  return pathItems
}
