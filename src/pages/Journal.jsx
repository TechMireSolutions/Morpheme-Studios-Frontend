import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import { journal } from '../data/journal.js'

export default function Journal() {
  const [lead, ...rest] = journal

  return (
    <div className="page">
      <header className="page-head wrap">
        <Reveal><p className="label">Journal</p></Reveal>
        <AnimatedHeading as="h1" className="display page-title" text="Notebook" />
        <Reveal variant="fade" delay={0.15}>
          <p className="lead maxw-720 page-head-sub">
            Essays, studio news and the materials and ideas we keep returning to.
          </p>
        </Reveal>
      </header>

      {/* Lead article */}
      <section className="wrap section-tight">
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
