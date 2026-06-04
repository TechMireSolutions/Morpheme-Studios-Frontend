import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'

// Wraps an image and gives it a gentle parallax drift on scroll.
export default function Parallax({ src, alt, ratio = 'ratio-4-3', amount = 14, className = '', rounded = true }) {
  const wrap = useRef(null)
  const imgRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    },
    { scope: wrap }
  )

  return (
    <div
      ref={wrap}
      className={`media ${ratio} ${className}`}
      style={{ borderRadius: rounded ? 'var(--radius)' : 0 }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        style={{ height: `${100 + amount * 2}%`, marginTop: `-${amount}%` }}
      />
    </div>
  )
}
