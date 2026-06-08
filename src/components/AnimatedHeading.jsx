import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'

/**
 * Splits text into words and reveals them line-by-line on scroll
 * using a clip/translate mask — the signature editorial entrance.
 */
export default function AnimatedHeading({
  text,
  as: Tag = 'h2',
  className = '',
  trigger = true,
  delay = 0,
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const words = ref.current.querySelectorAll('.ah-word > span')
      if (!words.length) return
      gsap.set(words, { yPercent: 110 })
      gsap.to(words, {
        yPercent: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.045,
        delay,
        scrollTrigger: trigger
          ? { trigger: ref.current, start: 'top 88%', once: true }
          : undefined,
      })
    },
    { scope: ref }
  )

  const words = String(text).split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="ah-word" aria-hidden="true">
          <span>{w}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
