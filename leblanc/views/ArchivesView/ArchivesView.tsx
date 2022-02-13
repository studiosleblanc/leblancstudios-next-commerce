import React from 'react'
import { ComingSoon } from '@leblanc/components/ui'
import { useRouter } from 'next/router'
import { usePathItems } from '@leblanc/hooks/usePathItems'
import { MainLayout } from '@leblanc/layouts'

const ArchivesView = () => {

  const router = useRouter()
  const { asPath } = router
  const { navItems, pathItems } = usePathItems(asPath)

  console.log(navItems)

  return (
    <MainLayout>
      <ComingSoon />
    </MainLayout>
  )
}

export default ArchivesView
