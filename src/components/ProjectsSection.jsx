import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

function ProjectsSection({ isDark }) {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Real projects built while learning"
          description="Hands-on backend and AI-focused work centered on reliability, scalability, and practical problem solving."
          isDark={isDark}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`flex flex-col rounded-2xl border bg-gradient-to-br p-6 shadow-xl ${
                isDark
                  ? 'border-white/10 from-slate-900 to-slate-900/80 shadow-black/20'
                  : 'border-slate-300 from-white to-slate-100 shadow-slate-300/45'
              }`}
            >
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        isDark
                          ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200'
                          : 'border-blue-400/35 bg-blue-500/10 text-blue-700'
                      }`}
                    >
                      {item}
                    </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/20 text-slate-100 hover:border-cyan-300 hover:text-cyan-200'
                    : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <FaGithub />
                View on GitHub
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
