import { useState, useEffect } from 'react'
import email from '@emailjs/browser'
export const useNewsletterForm = (
  form: any,
  typeForm: 'popup' | 'page',
  submit: boolean
) => {
  const [status, setStatus] = useState({ message: '', status: '' })

  useEffect(() => {
    if (submit) {
      const formEmailJS =
        typeForm === 'popup'
          ? { lastname: '', email: form.email, name: '', gender: form.gender }
          : {
              lastname: form.lastname,
              email: form.email,
              name: form.name,
              gender: '',
            }
      email
        .send(
          process.env.SERVICE_ID_EMAILJS || 'service_lpzbna7',
          process.env.TEMPLATE_ID_EMAILJS || 'template_b3ygj4i',
          formEmailJS,
          '1NBwvd_V8fGbyqSis'
        )
        .then((res: any) => {
          setStatus({ message: 'Email sent', status: res.text })
        })
    }
  }, [submit])
  return status
}
