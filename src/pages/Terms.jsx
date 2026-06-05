import Reveal from '../components/Reveal.jsx'

export default function Terms() {
  return (
    <div className="page">
      <header className="page-head wrap">
        <Reveal><p className="label">Legal</p></Reveal>
        <h1 className="display page-title">Terms of Use</h1>
      </header>
      <section className="section">
        <div className="wrap maxw-900 body-muted lead">
          <div className="contact-block">
            <p className="label">1. General Information</p>
            <p className="mt-s">Morpheme Studios provides this website for informational purposes only. By accessing this site, you agree to these Terms of Use.</p>
          </div>
          
          <div className="contact-block mt-l">
            <p className="label">2. Privacy & Data</p>
            <p className="mt-s">We respect your privacy. Our website does not collect cookies or store personal data. If you have concerns regarding the use of your data, please reach out to us at <a href="mailto:connect@morphemestudios.com" className="link-u">connect@morphemestudios.com</a>.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">3. Intellectual Property</p>
            <p className="mt-s">Morpheme Studios owns or holds the rights to all images, text, and designs on this website. No content may be used, reproduced, or distributed without express written permission.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">4. Liability</p>
            <p className="mt-s">Morpheme Studios is not responsible for the accuracy of information displayed or for any consequences arising from its use by third parties.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">5. Updates</p>
            <p className="mt-s">These Terms of Use may be updated periodically. The most recent version will always be posted on this page.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
