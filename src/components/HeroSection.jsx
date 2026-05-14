import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'
import { heroContent } from '../data/content'

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
          animate={{ opacity: [0.2, 0.38, 0.2], scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Parallax translateY={[-20, 20]}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-cyan-300 uppercase">
            Software Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.name}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">{heroContent.title}</p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {heroContent.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/35 transition hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </Parallax>
    </section>
  )
}

export default HeroSection
