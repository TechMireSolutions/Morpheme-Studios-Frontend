import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from '../lib/gsap.js'

// Reset scroll on route change + refresh ScrollTriggers for the new page.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}
