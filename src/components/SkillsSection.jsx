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

function SkillsSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A growing toolkit for software development"
          description="Focused on core CS concepts, backend architecture, and modern web development practices."
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
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/15"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full bg-cyan-500/15 p-2 text-cyan-300">
                    <GroupIcon />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-200"
                      >
                        <span className="text-cyan-300/90">
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
