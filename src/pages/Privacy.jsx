import Reveal from '../components/Reveal.jsx'

export default function Privacy() {
  return (
    <div className="page">
      <header className="page-head wrap">
        <Reveal><p className="label">Legal</p></Reveal>
        <h1 className="display page-title">Privacy Policy</h1>
      </header>
      <section className="section">
        <div className="wrap maxw-900 body-muted lead">
          <p>This is a placeholder for the Privacy Policy and Data Protection guidelines for Morpheme Studios.</p>
          <p className="mt-m">We respect your data and handle it with the utmost care.</p>
        </div>
      </section>
    </div>
  )
}
