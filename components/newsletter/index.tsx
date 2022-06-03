import { FC } from 'react'
import styles from './styles.module.css'
import Form from './form'
const Content: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>If you want to receive our newsletter, please fill out the form.</p>
        <Form />
      </div>
    </div>
  )
}
export default Content
