import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import Parallax from '../components/Parallax.jsx'
import img from '../data/images.js'

const roles = [
  { title: 'Project Architect', place: 'London', type: 'Full-time' },
  { title: 'Architectural Designer', place: 'London / Karachi', type: 'Full-time' },
  { title: 'Interior Designer', place: 'Dubai', type: 'Full-time' },
  { title: 'BIM Coordinator', place: 'Karachi', type: 'Full-time' },
  { title: 'Visualisation Artist', place: 'Remote', type: 'Contract' },
  { title: 'Studio Internship', place: 'London', type: 'Internship' },
]

const values = [
  { no: '01', title: 'One studio', text: 'We work as a single team across three countries — ideas travel freely, ego doesn’t.' },
  { no: '02', title: 'Craft over noise', text: 'We’d rather make one quietly excellent thing than ten loud ones.' },
  { no: '03', title: 'Grow people', text: 'Mentorship, real responsibility early, and the room to make your own mark.' },
]

export default function Careers() {
  return (
    <div className="page">
      <header className="page-head wrap">
        <Reveal><p className="label">Careers</p></Reveal>
        <AnimatedHeading as="h1" className="display page-title" text="Build with us." />
        <Reveal variant="fade" delay={0.15}>
          <p className="lead maxw-720 page-head-sub">
            We’re always looking for thoughtful designers who care about light, detail
            and the people who’ll use what we build. Join a studio that works as one
            across London, Dubai and Karachi.
          </p>
        </Reveal>
      </header>

      <section className="wrap section-tight">
        <Reveal variant="clip">
          <Parallax src={img.studio2} alt="Studio culture" ratio="ratio-16-9" />
        </Reveal>
      </section>

      {/* Values */}
      <section className="section">
        <div className="wrap two-col">
          <Reveal><p className="label">Why us</p></Reveal>
          <div className="grid careers-values">
            {values.map((v) => (
              <Reveal variant="up" key={v.no} className="value-row">
                <span className="approach-no">{v.no}</span>
                <div>
                  <h3 className="h-md">{v.title}</h3>
                  <p className="body-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section dark">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="label">Open positions</p>
            <h2 className="h-lg">Current openings</h2>
          </Reveal>
          <ul className="roles">
            {roles.map((r) => (
              <Reveal variant="up" as="li" key={r.title} className="role-row" data-cursor="Apply">
                <h3 className="role-title h-md">{r.title}</h3>
                <span className="role-place body-muted">{r.place}</span>
                <span className="label role-type">{r.type}</span>
                <span className="role-arrow">→</span>
              </Reveal>
            ))}
          </ul>
          <Reveal variant="fade" className="roles-foot">
            <p className="body-muted">
              Don’t see your role? We still want to hear from you.
            </p>
            <a href="mailto:connect@morphemestudios.com" className="btn" data-cursor>
              Send an open application <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
