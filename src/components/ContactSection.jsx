import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { contactLinks } from '../data/content'

function ContactSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-8 shadow-xl shadow-black/20 sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect and build impactful software"
          description="I’m always open to collaborations, internships, and opportunities where I can learn and contribute."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <Icon />
                {link.name}
              </motion.a>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
          className="mt-10 grid gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/35 transition hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
