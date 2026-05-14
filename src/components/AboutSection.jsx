import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { aboutContent } from '../data/content'

function AboutSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Driven by curiosity, focused on growth"
          description="A student developer building strong fundamentals in algorithms, backend systems, and modern web technologies."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mx-auto"
          >
            <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl shadow-black/25 sm:h-52 sm:w-52">
              <span className="text-5xl font-semibold text-cyan-300 sm:text-6xl">PK</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-5 text-left"
          >
            {aboutContent.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
