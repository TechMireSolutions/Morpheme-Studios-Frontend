import { Link } from 'react-router-dom'
import AnimatedHeading from '../components/AnimatedHeading.jsx'

export default function NotFound() {
  return (
    <div className="page notfound">
      <div className="wrap notfound-inner">
        <p className="label">Error 404</p>
        <AnimatedHeading as="h1" className="display" text="Lost the plot." trigger={false} />
        <p className="lead body-muted">This page doesn’t exist — or has been redesigned away.</p>
        <Link to="/" className="btn" data-cursor>Back home <span className="arrow">→</span></Link>
      </div>
    </div>
  )
}
