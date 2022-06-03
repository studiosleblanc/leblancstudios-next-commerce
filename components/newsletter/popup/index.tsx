import { FC } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { ClosePopup, Spot } from 'components/icons'
Modal.setAppElement('#__next')
const Popup: FC = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({ gender: '', email: '', submit: false })
  const handleForm = (e: any) => {
    const aux: any = { ...form }
    aux[e.target.name] = e.target.value
    setForm(aux)
  }
  useEffect(() => {
    const storage = localStorage.getItem('popupOpen')
    if (storage) {
      storage === 'open' ? setPopupOpen(true) : setPopupOpen(false)
    } else {
      setPopupOpen(true)
      localStorage.setItem('popupOpen', 'open')
    }
  }, [])
  useEffect(() => {
    if (popupOpen) {
      localStorage.setItem('popupOpen', 'open')
    } else {
      localStorage.setItem('popupOpen', 'close')
    }
  }, [popupOpen])
  const onSubmit = (e: any) => {
    e.preventDefault()
    if (form.gender !== '' && form.email !== '') {
      message !== '' && setMessage('')
      setForm({ ...form, submit: true })
    } else {
      setMessage('The fields must not be empty')
    }
  }
  return (
    <Modal
      isOpen={popupOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}>
      <div className={styles.root}>
        <div className={styles.actions}>
          <button onClick={() => setPopupOpen(false)}>
            <ClosePopup />
          </button>
        </div>
        <div className={styles.content}>
          <h1>WHERE DO YOU HAVE YOUR MONEY BURIED?</h1>
          <p>
            Please join to our newsletter to receive information regarding to new
            collections, special events, exclusive offers and tell us where is your
            money hidden.
          </p>
          <div className={styles.form}>
            {message && (
              <span className={styles.messageError}>
                the fields must not be empty
              </span>
            )}
            <form onSubmit={e => onSubmit(e)}>
              <div className={styles.input}>
                <Radioinput
                  name="gender"
                  value="men"
                  id="men"
                  label="MENSWEAR"
                  onChange={(e: any) => handleForm(e)}
                />
              </div>
              <div className={styles.input}>
                <Radioinput
                  name="gender"
                  value="women"
                  id="women"
                  onChange={(e: any) => handleForm(e)}
                  label="WOMENSWEAR"
                />
              </div>
              <div className={styles.input}>
                <div className={styles.email}>
                  <label htmlFor="email">
                    <span>EMAIL:</span>
                    <input
                      type="email"
                      value={form.email}
                      name="email"
                      onChange={(e: any) => handleForm(e)}
                    />
                  </label>
                </div>
              </div>
              <div className={`${styles.input} ${styles.button}`}>
                <button className={styles.submit}>SEND</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.spot}>
          <Spot />
        </div>
      </div>
    </Modal>
  )
}
function Radioinput(props: {
  name: string
  value: string
  id: string
  onChange: Function
  label: string
}): JSX.Element {
  const { name, value, id, label, onChange } = props
  return (
    <div className={styles.radio}>
      <label htmlFor={id} className={styles.container}>
        {label}
        <input
          type="radio"
          value={value}
          name={name}
          id={id}
          onChange={(e: any) => onChange(e)}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  )
}
export default Popup
