import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import { journal } from '../data/journal.js'

export default function Journal() {
  const [lead, ...rest] = journal
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
    .from('.jlead-wrap', {
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.6')
  }, { scope: headerRef })

  return (
    <div className="page" ref={headerRef}>
      <header className="page-head wrap">
        <Reveal><p className="label">Blogs</p></Reveal>
        <AnimatedHeading as="h1" className="display page-title" text="Blogs" />
        <Reveal variant="fade" delay={0.15}>
          <p className="lead maxw-720 page-head-sub">
            Essays, studio news and the materials and ideas we keep returning to.
          </p>
        </Reveal>
      </header>

      {/* Lead article */}
      <section className="wrap section-tight jlead-wrap">
        <Reveal variant="clip">
          <Link to="/journal" className="jlead" data-cursor="Read">
            <div className="media zoom ratio-16-9 jlead-media">
              <img src={lead.image} alt={lead.title} />
            </div>
            <div className="jlead-meta">
              <div className="jcard-top">
                <span className="label">{lead.category}</span>
                <span className="body-muted jcard-date">{lead.date}</span>
              </div>
              <h2 className="h-lg">{lead.title}</h2>
              <p className="lead body-muted">{lead.excerpt}</p>
              <span className="link-u">Read article →</span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="wrap grid cols-3 keep-2 journal-grid">
          {rest.map((post) => (
            <Reveal variant="fade" key={post.slug}>
              <Link to="/journal" className="jcard" data-cursor="Read">
                <div className="media zoom ratio-4-3">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="jcard-meta">
                  <div className="jcard-top">
                    <span className="label">{post.category}</span>
                    <span className="body-muted jcard-date">{post.date}</span>
                  </div>
                  <h3 className="h-md">{post.title}</h3>
                  <p className="body-muted">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
