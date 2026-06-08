import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'
import Reveal from '../components/Reveal.jsx'
import Parallax from '../components/Parallax.jsx'
import ResilientImage from '../components/ResilientImage.jsx'
import { team, approach, stats, offices } from '../data/studio.js'
import img from '../data/images.js'

export default function Studio() {
  const headerRef = useRef(null)

  useGSAP(() => {
    if (!headerRef.current) return
    const tl = gsap.timeline()
    tl.from('.page-title .ah-word > span', {
      yPercent: 110,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.08,
    })
    .from('.page-head .label, .page-head-sub', {
      y: 20,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    }, '-=0.8')
    .from('.lead-image-wrap', {
      scale: 1.1,
      autoAlpha: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1')
  }, { scope: headerRef })

  return (
    <div className="page page-studio" ref={headerRef}>
      {/* Page header */}
      <header className="page-head wrap">
        <Reveal><p className="label">The Studio</p></Reveal>
        <Reveal variant="fade" delay={0.2}>
          <p className="lead maxw-720 page-head-sub">
            M/S MORPHEME STUDIOS is an architecture design service firm or incorporation of art. The firm reflects an enduring dedication to contemporary design principles and its applications.
          </p>
        </Reveal>
      </header>

      {/* Big lead image */}
      <section className="wrap section-tight lead-image-wrap">
        <Reveal variant="clip">
          <Parallax src={img.studio} alt="Inside the studio" ratio="ratio-16-9" />
        </Reveal>
      </section>

      {/* Team */}
      <section className="section team">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="label">The people</p>
            <h2 className="h-lg">Leadership &amp; partners</h2>
          </Reveal>

          <div className="team-grid" role="list" aria-label="Leadership and partners">
            {team.map((m) => (
              <Reveal variant="fade" key={m.name} className="team-card-wrap">
                <article className="team-card" role="listitem">
                  <div className="team-card-media">
                    <ResilientImage
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="team-card-body">
                    <p className="label team-role">{m.role}</p>
                    <h3 className="member-name h-md">{m.name}</h3>
                    <p className="body-muted member-note">{m.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section dark offices">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="label">Find us</p>
            <h2 className="h-lg">Three studios, one practice</h2>
          </Reveal>
          <div className="grid cols-3 keep-2 offices-grid">
            {offices.map((o) => (
              <Reveal variant="up" key={o.city} className="office">
                <h3 className="h-md">{o.city}</h3>
                <p className="label">{o.country}</p>
                <div className="office-lines body-muted">
                  {o.lines.map((l) => <span key={l}>{l}</span>)}
                  <span>{o.phone}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" className="offices-cta">
            <Link to="/contact" className="btn" data-cursor>Work with us <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
