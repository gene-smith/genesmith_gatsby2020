import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const reducedMotionVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  }

  const reducedMotionTransition = {
    duration: 0.2,
  }

  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={prefersReducedMotion ? reducedMotionVariants : pageVariants}
      transition={
        prefersReducedMotion ? reducedMotionTransition : pageTransition
      }
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </motion.div>
  )
}

export default App
