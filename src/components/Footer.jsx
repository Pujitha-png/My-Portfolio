function Footer({ isDark }) {
  return (
    <footer
      className={`border-t px-6 py-8 text-center text-sm sm:px-8 lg:px-10 ${
        isDark ? 'border-white/10 text-slate-400' : 'border-slate-300 text-slate-600'
      }`}
    >
      <p>© 2026 Pujita Nagalakshmi Kotha</p>
      <p className="mt-1">Built with React, Tailwind and passion.</p>
    </footer>
  )
}

export default Footer
