import { FC } from 'react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { useNewsletterForm } from '@lib/hooks/useNewsletterForm'
const Form: FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    lastname: '',
    submit: false,
  })
  const [message, setMessage] = useState('')
  const handleForm = (e: any) => {
    const aux: any = { ...form }
    aux[e.target.name] = e.target.value
    setForm(aux)
  }
  const emailForm = useNewsletterForm(form, 'page', form.submit)
  const onSubmit = (e: any) => {
    e.preventDefault()
    if (form.name !== '' && form.email !== '' && form.lastname !== '') {
      message !== '' && setMessage('')
      setForm({ ...form, submit: true })
    } else {
      setMessage('The fields must not be empty')
    }
  }
  useEffect(() => {
    console.log(emailForm)
  }, [emailForm])
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {message && (
          <span className={styles.messageError}>the fields must not be empty</span>
        )}
        <form onSubmit={(e: any) => onSubmit(e)}>
          <div className={styles.input}>
            <Input
              name="name"
              value={form.name}
              onChange={(e: any) => handleForm(e)}
              id="name"
              label="Name:"
            />
          </div>
          <div className={styles.input}>
            <Input
              name="lastname"
              value={form.lastname}
              onChange={(e: any) => handleForm(e)}
              id="lastname"
              label="Last name:"
            />
          </div>
          <div className={styles.input}>
            <Input
              name="email"
              value={form.email}
              onChange={(e: any) => handleForm(e)}
              id="email"
              label="Email:"
            />
          </div>
          <div className={`${styles.input} ${styles.submit}`}>
            <button className={styles.button}>
              {form.submit ? 'Sent' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
function Input(props: {
  id: string
  name: string
  value: string
  onChange: Function
  label: string
}): JSX.Element {
  const { id, name, value, onChange, label } = props
  return (
    <div className={styles.inp}>
      <label htmlFor={id}>
        <span>{label}</span>
        <input
          type="text"
          value={value}
          id={id}
          name={name}
          onChange={(e: any) => onChange(e)}
        />
      </label>
    </div>
  )
}
export default Form
