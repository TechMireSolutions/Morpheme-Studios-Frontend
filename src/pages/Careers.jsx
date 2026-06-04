import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'
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
    .from('.careers-image-wrap', {
      scale: 1.1,
      autoAlpha: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1.2')
  }, { scope: headerRef })

  return (
    <div className="page" ref={headerRef}>
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

      <section className="wrap section-tight careers-image-wrap">
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
        </div>
      </section>

      {/* Application Form */}
      <section className="section application">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal className="contact-aside">
              <div className="contact-block">
                <p className="label">Join the studio</p>
                <h2 className="h-lg">Submit your application</h2>
                <p className="body-muted mt-s">
                  We are always on the lookout for exceptional talent. If you don't see
                  a role that fits but believe you'd be a great addition to Morpheme
                  Studios, please fill out the form.
                </p>
              </div>
              <div className="contact-block">
                <p className="label">Requirements</p>
                <ul className="footer-list mt-s">
                  <li>CV (PDF format)</li>
                  <li>Portfolio (Max 10MB)</li>
                  <li>Cover Letter</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade" className="contact-main">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="field-row">
                  <div className="field">
                    <label>First Name*</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="field">
                    <label>Last Name*</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Gender*</label>
                    <select required className="custom-select">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Date of Birth*</label>
                    <input type="date" required />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Nationality*</label>
                    <input type="text" placeholder="Your Nationality" required />
                  </div>
                  <div className="field">
                    <label>Country of Residence*</label>
                    <input type="text" placeholder="Current Country" required />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Email*</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="field">
                    <label>Phone*</label>
                    <input type="tel" placeholder="+1 234 567 890" required />
                  </div>
                </div>

                <div className="field">
                  <label>Home Address*</label>
                  <textarea placeholder="Your permanent address" rows="2" required></textarea>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Field of Expertise</label>
                    <input type="text" placeholder="e.g. Sustainable Design" />
                  </div>
                  <div className="field">
                    <label>Applying for*</label>
                    <select required className="custom-select">
                      <option value="">Select Position</option>
                      <option value="architect-ii">Architect Part II</option>
                      <option value="architect-assistant-i">Architectural assistant Part I</option>
                      <option value="architect-assistant">Architectural assistant</option>
                      <option value="internship">Internship</option>
                      <option value="landscape">Landscape Architect</option>
                      <option value="visualizer">Visualizer</option>
                      <option value="technician">Architectural Technician</option>
                      <option value="interior">Interior Designer</option>
                      <option value="ffe">FF&E Manager</option>
                    </select>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Education*</label>
                    <select required className="custom-select">
                      <option value="">Select Education Level</option>
                      <option value="post-grad">Post Graduate</option>
                      <option value="post-doc">Post Doctor</option>
                      <option value="diploma">Diploma</option>
                      <option value="technical">Technical Education</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Years of Experience*</label>
                    <select required className="custom-select">
                      <option value="">Select Range</option>
                      <option value="1-3">1 - 3 years</option>
                      <option value="4-7">4 - 7 years</option>
                      <option value="7-12">7 - 12 years</option>
                      <option value="12+">12+ years</option>
                    </select>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>CV (PDF)*</label>
                    <input type="file" accept=".pdf" required />
                  </div>
                  <div className="field">
                    <label>Portfolio (Max 10MB)*</label>
                    <input type="file" accept=".pdf" required />
                  </div>
                </div>

                <div className="field">
                  <label>Cover Letter</label>
                  <input type="file" accept=".pdf" />
                </div>

                <div className="field flex items-center gap-s mt-s">
                  <input type="checkbox" id="terms" required className="checkbox" />
                  <label htmlFor="terms" className="label-ink" style={{ letterSpacing: '0.05em', textTransform: 'none' }}>
                    I agree to the Terms of Use and Privacy Policy*
                  </label>
                </div>

                <button type="submit" className="btn btn-fill mt-m" data-cursor>
                  Submit Application <span className="arrow">→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
