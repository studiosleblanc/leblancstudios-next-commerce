import { FC, useEffect, useRef } from 'react'
import s from './Sidebar.module.css'
import cn from 'classnames'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

interface SidebarProps {
  children: any
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (ref.current) {
      disableBodyScroll(ref.current, { reserveScrollBarGap: true })
    }
    return () => {
      if (ref && ref.current) {
        enableBodyScroll(ref.current)
      }
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <div className={cn(s.root)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.backdrop} onClick={onClose} />
        <section className={s.sidebarOuter}>
          <div className={s.sidebarContainer}>
            <div className={s.sidebar} ref={ref}>
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
