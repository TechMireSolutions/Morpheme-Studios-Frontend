import { useState } from 'react'
import { api, ApiError } from '../lib/api.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setMessage('')
    try {
      await api.subscribe({ email })
      setStatus('done')
      setMessage('Check your inbox to confirm your subscription.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      const fieldMsg = err instanceof ApiError && err.fields?.email?.[0]
      setMessage(fieldMsg || err?.message || 'Subscription failed. Please try again.')
    }
  }

  return (
    <div className="footer-col footer-newsletter">
      <p className="label">Newsletter</p>
      {status === 'done' ? (
        <p className="body-muted" role="status" aria-live="polite">{message}</p>
      ) : (
        <form className="newsletter-form" onSubmit={submit} noValidate>
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === 'error'}
          />
          <button type="submit" className="btn btn-sm" data-cursor disabled={status === 'sending'}>
            {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
          </button>
          {status === 'error' && <span className="field-error" role="alert">{message}</span>}
        </form>
      )}
    </div>
  )
}
