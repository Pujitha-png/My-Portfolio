import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const VISIBILITY_THRESHOLD = 200

function ScrollToTopButton({ isDark }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let isFramePending = false

    const updateVisibility = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight
      setIsVisible(pageHeight - scrollPosition <= VISIBILITY_THRESHOLD)
      isFramePending = false
    }

    const handleScroll = () => {
      if (isFramePending) {
        return
      }

      isFramePending = true
      window.requestAnimationFrame(updateVisibility)
    }

    updateVisibility()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition hover:-translate-y-1 ${
        isDark
          ? 'border-cyan-400/40 bg-slate-900/90 text-cyan-300 hover:bg-slate-800'
          : 'border-orange-400/40 bg-white/95 text-orange-700 hover:bg-orange-50'
      }`}
    >
      <FiArrowUp size={20} />
    </button>
  )
}

export default ScrollToTopButton
