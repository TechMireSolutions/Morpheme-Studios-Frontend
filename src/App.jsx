import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Critical View
import Home from './pages/Home.jsx'

// Non-critical Views (Lazy Loaded)
const Studio = lazy(() => import('./pages/Studio.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Careers = lazy(() => import('./pages/Careers.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const location = useLocation()
  const [intro, setIntro] = useState(true)

  // Safety fallback to hide loader even if GSAP fails
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {intro && <Loader onDone={() => setIntro(false)} />}
      <Cursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loader" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer hideCTA={['/blog', '/careers', '/contact', '/terms'].includes(location.pathname)} />
    </>
  )
}
