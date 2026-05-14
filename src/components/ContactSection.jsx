import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { contactLinks } from '../data/content'

function ContactSection({ isDark }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:pujitha0709@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div
        className={`mx-auto max-w-5xl rounded-3xl border bg-gradient-to-b p-8 shadow-xl sm:p-10 ${
          isDark
            ? 'border-white/10 from-slate-900/80 to-slate-950/80 shadow-black/20'
            : 'border-slate-300 from-white to-slate-100 shadow-slate-300/45'
        }`}
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect and build impactful software"
          description="I’m always open to collaborations, internships, and opportunities where I can learn and contribute."
          isDark={isDark}
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
                className={`flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${
                  isDark
                    ? 'border-white/20 text-slate-100 hover:border-cyan-300 hover:text-cyan-200'
                    : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                }`}
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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-100 focus:border-cyan-300'
                : 'border-slate-300 bg-white text-slate-900 focus:border-blue-500'
            }`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-100 focus:border-cyan-300'
                : 'border-slate-300 bg-white text-slate-900 focus:border-blue-500'
            }`}
          />
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className={`rounded-xl border px-4 py-3 text-sm outline-none transition ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-100 focus:border-cyan-300'
                : 'border-slate-300 bg-white text-slate-900 focus:border-blue-500'
            }`}
          />
          <button
            type="submit"
            className={`w-fit rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 ${
              isDark
                ? 'from-violet-500 to-blue-600 shadow-indigo-950/35'
                : 'from-blue-500 to-indigo-600 shadow-blue-900/20'
            }`}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
