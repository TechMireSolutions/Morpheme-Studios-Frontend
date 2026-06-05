import { Link } from 'react-router-dom'
import { offices } from '../data/studio.js'
import AnimatedHeading from './AnimatedHeading.jsx'

export default function Footer({ hideCTA = false }) {
  return (
    <footer className="footer dark">
      <div className="wrap">
        {!hideCTA && (
          <div className="footer-cta">
            <p className="label">Start a conversation</p>
            <AnimatedHeading
              as="h2"
              className="display footer-cta-title"
              text="Let’s build something lasting."
            />
            <Link to="/contact" className="btn footer-cta-btn" data-cursor>
              Get in touch <span className="arrow">→</span>
            </Link>
          </div>
        )}

        {!hideCTA && <div className="divider" />}

        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/morpheme2.0-1.png" alt="Morpheme Studios" className="footer-logo-img" />
            </Link>
            <p className="body-muted footer-tag">
              An architecture &amp; design practice creating clear, inspirational
              and personal spaces across cultural, corporate and residential
              sectors.
            </p>
            <a href="mailto:connect@morphemestudios.com" className="link-u footer-email">
              connect@morphemestudios.com
            </a>
          </div>

          <div className="footer-col">
            <p className="label">Menu</p>
            <ul className="footer-list">
              <li><Link to="/projects" className="link-u">Projects</Link></li>
              <li><Link to="/studio" className="link-u">Studio</Link></li>
              <li><Link to="/journal" className="link-u">Blogs</Link></li>
              <li><Link to="/careers" className="link-u">Careers</Link></li>
              <li><Link to="/contact" className="link-u">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="label">Offices</p>
            <ul className="footer-list footer-offices">
              {offices.map((o) => (
                <li key={o.city}>
                  <strong>{o.city}</strong>
                  <span className="body-muted">{o.lines.join(', ')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="label">Follow</p>
            <ul className="footer-list">
              <li><a href="https://instagram.com/morphemestudios" target="_blank" rel="noopener noreferrer" className="link-u">Instagram</a></li>
              <li><a href="https://linkedin.com/company/morphemestudios" target="_blank" rel="noopener noreferrer" className="link-u">LinkedIn</a></li>
              <li><a href="https://facebook.com/morphemestudios" target="_blank" rel="noopener noreferrer" className="link-u">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="footer-bottom">
          <span className="body-muted">© {new Date().getFullYear()} Morpheme Studios. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/terms" className="body-muted link-u">Terms of Use</Link>
            <Link to="/privacy" className="body-muted link-u">Data Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
