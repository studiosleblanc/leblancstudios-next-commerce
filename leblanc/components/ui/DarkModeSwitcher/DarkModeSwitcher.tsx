import React from 'react'
import s from './DarkModeSwitcher.module.css'
import { useTheme } from 'next-themes'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      {theme && (
        <button
          className={s.root}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="dark mode">
          {theme === 'light' ? (
            <IoSunnyOutline size={22} />
          ) : (
            <IoMoonOutline size={20} />
          )}
        </button>
      )}
    </>
  )
}

export default DarkModeSwitcher
