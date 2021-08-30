import React, { FC } from 'react'
import { Footer } from '@leblanc/components/common'

interface Props {
  children: React.ReactNode | string
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
