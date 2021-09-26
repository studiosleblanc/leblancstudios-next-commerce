import React, { FC, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MainLayout } from '@leblanc/layouts'

const history: FC = () => {
  // const { setTheme } = useTheme()

  // useEffect(() => {
  //   setTheme('light') // dark
  //   return () => {
  //     setTheme('light')
  //   }
  // }, [])

  return <MainLayout>history page</MainLayout>
}

export default history
