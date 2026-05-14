import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { codingProfiles } from '../data/content'

function ProfilesSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Practice platforms I actively use"
          description="Track my coding consistency and progress across competitive programming and interview-prep platforms."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/65 p-5 text-slate-100 transition hover:border-cyan-300/45"
              >
                <span className="rounded-xl bg-cyan-500/15 p-3 text-xl text-cyan-300">
                  <Icon />
                </span>
                <span className="font-medium">{profile.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProfilesSection
