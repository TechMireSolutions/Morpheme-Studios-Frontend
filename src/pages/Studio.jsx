import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import Parallax from '../components/Parallax.jsx'
import Marquee from '../components/Marquee.jsx'
import { team, approach, stats, offices } from '../data/studio.js'
import img from '../data/images.js'

export default function Studio() {
  const headerRef = useRef(null)

  useGSAP(() => {
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
    <div className="page" ref={headerRef}>
      {/* Page header */}
      <header className="page-head wrap">
        <Reveal><p className="label">The Studio</p></Reveal>
        <AnimatedHeading
          as="h1"
          className="display page-title"
          text="People, light, place."
        />
        <Reveal variant="fade" delay={0.2}>
          <p className="lead maxw-720 page-head-sub">
            We are an architecture and design practice with a simple belief: that good
            space should be clear, inspirational and personal — and should foster
            intuitive human wellbeing.
          </p>
        </Reveal>
      </header>

      {/* Big lead image */}
      <section className="wrap section-tight lead-image-wrap">
        <Reveal variant="clip">
          <Parallax src={img.studio} alt="Inside the studio" ratio="ratio-16-9" />
        </Reveal>
      </section>

      {/* Philosophy two-column */}
      <section className="section">
        <div className="wrap two-col">
          <Reveal><p className="label">Philosophy</p></Reveal>
          <div>
            <AnimatedHeading
              as="h2"
              className="h-xl"
              text="We design with the most important material of all — light."
            />
            <Reveal variant="fade" delay={0.15} className="two-col-body">
              <p className="lead body-muted">
                Every project begins with people and ends with detail. Between the two
                we chase a single, clear idea: one concept strong enough to hold the
                whole building together, refined until nothing can be removed.
              </p>
              <p className="lead body-muted">
                Founded in London and now working across the UK, the UAE and Pakistan,
                Morpheme Studios operates as one studio across borders — sharing a
                language of restraint, craft and warmth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach steps */}
      <section className="section dark approach">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="label">How we work</p>
            <h2 className="h-lg">Our approach</h2>
          </Reveal>
          <div className="grid cols-4 keep-2 approach-grid">
            {approach.map((a) => (
              <Reveal variant="up" key={a.no} className="approach-card">
                <span className="approach-no">{a.no}</span>
                <h3 className="h-md">{a.title}</h3>
                <p className="body-muted">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="marquee-band marquee-band--alt">
        <Marquee
          duration={26}
          items={['14+ Years', '120+ Projects', '3 Continents', '9 Partners', 'One Studio']}
        />
      </section>

      {/* Team */}
      <section className="section team">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="label">The people</p>
            <h2 className="h-lg">Leadership &amp; partners</h2>
          </Reveal>

          <div className="grid cols-3 keep-2 team-grid">
            {team.map((m) => (
              <Reveal variant="fade" key={m.name} className="member">
                <div className="media zoom ratio-4-3">
                  <img src={m.image} alt={m.name} loading="lazy" />
                </div>
                <h3 className="member-name h-md">{m.name}</h3>
                <p className="label member-role">{m.role}</p>
                <p className="body-muted member-note">{m.note}</p>
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
