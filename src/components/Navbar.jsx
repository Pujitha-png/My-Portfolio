import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/content'

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer text-lg font-semibold tracking-wide text-white"
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
              className="cursor-pointer text-sm font-medium text-slate-200 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="text-2xl text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -12, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden"
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-medium text-slate-100 transition hover:text-cyan-300"
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
