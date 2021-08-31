import React, { FC } from 'react'
import { Footer, Header } from '@leblanc/components/common'

interface Props {
  children: React.ReactNode | string
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
