import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { navLinks } from '../data/content'

function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)
  const ThemeIcon = isDark ? FiMoon : FiSun
  const activeThemeLabel = isDark ? 'Dark' : 'Light'
  const nextThemeLabel = isDark ? 'light' : 'dark'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-slate-950/75' : 'border-slate-300 bg-white/80'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className={`cursor-pointer text-lg font-semibold tracking-wide transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
          onClick={closeMenu}
        >
          Pujita Kotha
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer text-sm font-medium transition ${
                isDark ? 'text-slate-200 hover:text-cyan-300' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label={`Active theme: ${activeThemeLabel}. Switch to ${nextThemeLabel} theme`}
            onClick={onToggleTheme}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${
              isDark
                ? 'border-white/20 text-slate-100 hover:border-cyan-300 hover:text-cyan-200'
                : 'border-amber-300 text-amber-900 hover:border-orange-500 hover:text-orange-700'
            }`}
          >
            <ThemeIcon />
            {activeThemeLabel}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={`Active theme: ${activeThemeLabel}. Switch to ${nextThemeLabel} theme`}
            onClick={onToggleTheme}
            className={`rounded-full border p-2 text-lg transition ${
              isDark
                ? 'border-white/20 text-slate-100 hover:border-cyan-300 hover:text-cyan-200'
                : 'border-amber-300 text-amber-900 hover:border-orange-500 hover:text-orange-700'
            }`}
          >
            <ThemeIcon />
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className={`text-2xl ${isDark ? 'text-slate-100' : 'text-slate-800'}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -12, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`border-t px-6 py-4 md:hidden ${
          isDark ? 'border-white/10 bg-slate-950/95' : 'border-slate-300 bg-white/95'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer text-sm font-medium transition ${
                isDark ? 'text-slate-100 hover:text-cyan-300' : 'text-slate-700 hover:text-blue-600'
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar
