import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Studio from './pages/Studio.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Blog from './pages/Blog.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

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
      </main>
      <Footer hideCTA={['/blog', '/careers', '/contact', '/terms'].includes(location.pathname)} />
    </>
  )
}
