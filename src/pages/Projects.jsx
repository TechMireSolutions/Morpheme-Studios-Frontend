import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, categories } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState('all')

  const list = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="page">
      <header className="page-head wrap">
        <Reveal><p className="label">Selected Work</p></Reveal>
        <AnimatedHeading as="h1" className="display page-title" text="Projects" />
        <Reveal variant="fade" delay={0.15}>
          <p className="lead maxw-720 page-head-sub">
            Cultural, corporate and residential work across three continents — each
            project a search for one clear idea, carried from sketch to handover.
          </p>
        </Reveal>
      </header>

      {/* Filters */}
      <div className="wrap filters">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`filter ${active === c.key ? 'is-active' : ''}`}
            onClick={() => setActive(c.key)}
            data-cursor
          >
            {c.label}
            <span className="filter-count">
              {c.key === 'all'
                ? projects.length
                : projects.filter((p) => p.category === c.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="section-tight">
        <div className="wrap grid cols-2 projects-grid" key={active}>
          {list.map((p, i) => (
            <Reveal variant="fade" key={p.slug}>
              <ProjectCard project={p} index={i} ratio="ratio-4-3" />
            </Reveal>
          ))}
        </div>
        {list.length === 0 && (
          <p className="wrap body-muted">No projects in this category yet.</p>
        )}
      </section>
    </div>
  )
}
