import { FC, InputHTMLAttributes, useEffect, useMemo } from 'react'
import cn from 'classnames'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'
import SearchIcon from '@components/icons/SearchIcon'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return useMemo(
    () => (
      <div className={cn(s.root, className)}>
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          className={s.input}
          placeholder=" "
          defaultValue={router.query.q}
          onKeyUp={handleKeyUp}
        />
        <div className={s.iconContainer}>
          <SearchIcon />
        </div>
      </div>
    ),
    []
  )
}

export default Searchbar
