import React, { FC, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MainLayout } from '@leblanc/layouts'

const history: FC = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
    return () => {
      setTheme('light')
    }
  }, [])

  return <div>history page</div>
}

export default history
