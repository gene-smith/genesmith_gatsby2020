import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

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

function Card(props) {
  const { cardTitle, cardSubtitle, link } = props
  const prefersReducedMotion = usePrefersReducedMotion()

  const cardAnimationProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.02, y: -5 }, whileTap: { scale: 0.98 } }

  return (
    <motion.article
      className='card p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-brand focus-within:ring-opacity-50 h-full flex flex-col'
      {...cardAnimationProps}
      transition={{ duration: 0.2 }}
    >
      <header className='flex-shrink-0'>
        <h2 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white leading-tight'>
          {cardTitle}
        </h2>
      </header>
      <p className='text-gray-300 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed'>
        {cardSubtitle}
      </p>
      <div className='flex-shrink-0'>
        <a
          href={link}
          className='inline-block text-brand hover:text-white focus:text-white transition-colors underline focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded px-2 py-1 text-sm sm:text-base font-medium'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View ${cardTitle} project on GitHub`}
        >
          View Project →
        </a>
      </div>
    </motion.article>
  )
}

export default Card
