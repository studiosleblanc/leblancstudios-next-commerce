import React, { FC } from 'react'
import { Header } from '@leblanc/components/common'

interface Props {
  children: React.ReactNode | string
}

const HistoryLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default HistoryLayout
