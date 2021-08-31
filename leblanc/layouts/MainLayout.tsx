import React, { FC } from 'react'
import { Footer, Header } from '@leblanc/components/common'

interface Props {
  children: React.ReactNode | string
  noHeader?: boolean
}

const MainLayout: FC<Props> = ({ children, noHeader = true }) => {
  return (
    <div>
      {!noHeader && <Header />}
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
