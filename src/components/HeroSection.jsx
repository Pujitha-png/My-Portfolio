import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'
import { heroContent } from '../data/content'

const MOBILE_BREAKPOINT_QUERY = '(max-width: 639px)'

function HeroSection({ isDark }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches : false
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY)
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', updateViewport)

    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  const heroContentBlock = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mx-auto max-w-4xl text-center"
    >
      <p
        className={`mb-5 text-sm font-semibold tracking-[0.22em] uppercase ${
          isDark ? 'text-cyan-300' : 'text-orange-600'
        }`}
      >
        Software Portfolio
      </p>
      <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {heroContent.name}
      </h1>
      <p className={`mt-6 text-base leading-relaxed sm:text-lg ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
        {heroContent.title}
      </p>
      <p className={`mx-auto mt-3 max-w-3xl text-sm leading-relaxed sm:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {heroContent.education}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="projects"
          smooth
          duration={500}
          offset={-80}
            className={`cursor-pointer rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-900/35'
                : 'bg-gradient-to-r from-orange-500 to-amber-600 shadow-orange-900/20'
            }`}
        >
          View My Work
        </Link>
        <a
          href="/Pujita_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer rounded-full border px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
            isDark
              ? 'border-cyan-300/40 text-cyan-200 hover:border-cyan-300 hover:text-cyan-100'
              : 'border-orange-400 text-orange-700 hover:border-orange-500 hover:text-orange-800'
          }`}
        >
          View Resume
        </a>
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
            className={`cursor-pointer rounded-full border px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
              isDark
                ? 'border-white/30 text-slate-100 hover:border-cyan-300 hover:text-cyan-200'
                : 'border-amber-400 text-amber-900 hover:border-orange-500 hover:text-orange-700'
            }`}
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
  )

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-32 sm:pb-24 lg:px-10 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden="true"
          className={`absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl ${
            isDark ? 'bg-cyan-500/20' : 'bg-cyan-400/25'
          }`}
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-3xl ${
            isDark ? 'bg-violet-500/20' : 'bg-violet-400/25'
          }`}
          animate={{ opacity: [0.2, 0.38, 0.2], scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {isMobile ? (
        heroContentBlock
      ) : (
        <Parallax translateY={[-20, 20]} className="w-full">
          {heroContentBlock}
        </Parallax>
      )}
    </section>
  )
}

export default HeroSection
