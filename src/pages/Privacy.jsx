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
          <div className="contact-block">
            <p className="label">1. Comments</p>
            <p className="mt-s">When visitors leave comments on the site, we collect the data shown in the comments form, along with the visitor's IP address and browser user agent string to aid spam detection.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">2. Media</p>
            <p className="mt-s">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included, as visitors can download and extract this data.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">3. Cookies</p>
            <p className="mt-s">If you leave a comment, you may opt-in to saving your name and email in cookies for your convenience. These cookies last for one year. We also use temporary cookies for login verification which contain no personal data.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">4. Embedded Content</p>
            <p className="mt-s">Articles on this site may include embedded content (videos, images, etc.). Such content from other websites behaves exactly as if you visited those websites directly, and they may collect data about you.</p>
          </div>

          <div className="contact-block mt-l">
            <p className="label">5. Your Rights</p>
            <p className="mt-s">If you have an account or have left comments, you can request an exported file of the personal data we hold about you or request its erasure, except for data we are required to keep for legal purposes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
