import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap.js'
import Reveal from '../components/Reveal.jsx'
import AnimatedHeading from '../components/AnimatedHeading.jsx'
import Parallax from '../components/Parallax.jsx'
import img from '../data/images.js'

const roles = [
  { title: 'Senior Architect', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Architectural Assistants Part I & II', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Interior Designer', place: 'London / Dubai', type: 'Full-time' },
  { title: 'FF&E Designer', place: 'Dubai', type: 'Full-time' },
  { title: 'Landscape Architect', place: 'London / Karachi', type: 'Full-time' },
  { title: '3D Visualizer', place: 'Remote', type: 'Contract' },
  { title: 'Business Development Manager', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Office Manager', place: 'London / Karachi', type: 'Full-time' },
]

export default function Careers() {
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
            Morpheme Studios is always looking for talented architects, interior architects 
            and interns to join our team. You will enjoy working in an international, 
            creative and experimental studio in London and Dubai.
          </p>
        </Reveal>
      </header>

      <section className="wrap section-tight careers-image-wrap">
        <Reveal variant="clip">
          <Parallax src={img.studio2} alt="Studio culture" ratio="ratio-16-9" />
        </Reveal>
      </section>

      {/* Intro text */}
      <section className="section">
        <div className="wrap maxw-900">
          <Reveal>
            <p className="lead body-muted">
              Our teams are inclusive and embrace different backgrounds and expertise. 
              We are always looking for creative professionals in the AEC industry. 
              Please send your CV, motivation letter and portfolio (not more than 10MB) 
              via the form below.
            </p>
          </Reveal>
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
                    I agree to the Terms of Use*
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
