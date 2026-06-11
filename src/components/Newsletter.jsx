import { useState, useEffect, useRef } from 'react'
import { api, ApiError } from '../lib/api.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [confirmedEmail, setConfirmedEmail] = useState('')
  // Phases: idle | sending | confirming | fading | resend | resubmitting | error
  const [phase, setPhase] = useState('idle') 
  const [message, setMessage] = useState('')
  const fadeTimer = useRef(null)

  // Auto-fade the confirmation message after 2.5s, then show resend interface
  useEffect(() => {
    if (phase === 'confirming') {
      fadeTimer.current = setTimeout(() => {
        setPhase('fading')
        
        fadeTimer.current = setTimeout(() => {
          setPhase('resend')
        }, 500) // matches the 0.5s CSS opacity transition
      }, 2500)
    }
    
    return () => clearTimeout(fadeTimer.current)
  }, [phase])

  const doSubscribe = async (addr) => {
    try {
      await api.subscribe({ email: addr })
      setConfirmedEmail(addr)
      setMessage('Check your inbox to confirm your subscription.')
      setPhase('confirming')
    } catch (err) {
      const fieldMsg = err instanceof ApiError && err.fields?.email?.[0]
      setMessage(fieldMsg || err?.message || 'Subscription failed. Please try again.')
      setPhase('error')
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setPhase('sending')
    setMessage('')
    await doSubscribe(email)
    setEmail('') // Safely clear input since email is cached in parameters/state
  }

  const resend = async () => {
    setPhase('resubmitting')
    setMessage('')
    // Passes the cached confirmed email address back to backend
    await doSubscribe(confirmedEmail) 
  }

  return (
    <div className="footer-col footer-newsletter">
      <p className="label">Newsletter</p>

      {/* Case 1: Displaying the success message & its fade state */}
      {(phase === 'confirming' || phase === 'fading') && (
        <p
          className="body-muted nl-confirm-msg"
          role="status"
          aria-live="polite"
          style={{ opacity: phase === 'fading' ? 0 : 1, transition: 'opacity 0.5s ease' }}
        >
          {message}
        </p>
      )}

      {/* Case 2: Displaying the resend configuration */}
      {(phase === 'resend' || phase === 'resubmitting') && (
        <p className="body-muted nl-resend-wrap">
          Didn't get it?{' '}
          <button
            className="nl-resend-btn link-u"
            onClick={resend}
            disabled={phase === 'resubmitting'}
            data-cursor
          >
            {phase === 'resubmitting' ? 'Sending…' : 'Resend Email'}
          </button>
        </p>
      )}

      {/* Case 3: Displaying the default or error state input form */}
      {(phase === 'idle' || phase === 'sending' || phase === 'error') && (
        <form className="newsletter-form" onSubmit={submit} noValidate>
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={phase === 'error'}
          />
          <button type="submit" className="btn btn-sm" data-cursor disabled={phase === 'sending'}>
            {phase === 'sending' ? 'Subscribing…' : 'Subscribe'}
          </button>
          
          {phase === 'error' && (
            <span className="field-error" role="alert" style={{ display: 'block', marginTop: '5px' }}>
              {message}
            </span>
          )}
        </form>
      )}
    </div>
  )
}