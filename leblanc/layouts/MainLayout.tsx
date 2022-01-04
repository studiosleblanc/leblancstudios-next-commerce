import React, { FC } from 'react'
import { Footer, Header } from '@leblanc/components/common'
import { HeaderMobile } from '@leblanc/components/common'

interface Props {
  children: React.ReactNode | string
  noHeader?: boolean
  noDMSwitcher?: boolean
}

const MainLayout: FC<Props> = ({
  children,
  noHeader = false,
  noDMSwitcher = false,
}) => {
  return (
    <div>
      <HeaderMobile noDMSwitcher={noDMSwitcher} />
      {!noHeader && <Header />}
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
