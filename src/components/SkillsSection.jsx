import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/content'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function SkillsSection({ isDark }) {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A growing toolkit for software development"
          description="Focused on core CS concepts, backend architecture, and modern web development practices."
          isDark={isDark}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            return (
                <motion.article
                  key={group.title}
                  variants={itemVariants}
                  className={`rounded-2xl border p-6 shadow-lg ${
                    isDark
                      ? 'border-white/10 bg-slate-900/60 shadow-black/15'
                      : 'border-slate-300 bg-white shadow-slate-300/45'
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`rounded-full p-2 ${isDark ? 'bg-cyan-500/15 text-cyan-300' : 'bg-blue-500/10 text-blue-600'}`}>
                      <GroupIcon />
                    </span>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{group.title}</h3>
                  </div>
                  <ul className="space-y-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <li
                        key={skill.name}
                        className={`flex items-center gap-3 text-sm transition ${
                          isDark ? 'text-slate-300 hover:text-cyan-200' : 'text-slate-700 hover:text-blue-600'
                        }`}
                      >
                        <span className={isDark ? 'text-cyan-300/90' : 'text-blue-600'}>
                          <SkillIcon />
                        </span>
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
