import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p
        className={`mb-3 text-sm font-semibold tracking-[0.24em] uppercase ${
          isDark ? 'text-cyan-300' : 'text-orange-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading
