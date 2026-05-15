import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const VISIBILITY_THRESHOLD = 200

function ScrollToTopButton({ isDark }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let isFramePending = false
    let frameId = null

    const updateVisibility = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight
      const distanceFromBottom = pageHeight - scrollPosition
      const isScrollablePage = pageHeight - window.innerHeight > VISIBILITY_THRESHOLD
      setIsVisible(isScrollablePage && distanceFromBottom <= VISIBILITY_THRESHOLD)
      isFramePending = false
      frameId = null
    }

    const handleScroll = () => {
      if (isFramePending) {
        return
      }

      isFramePending = true
      frameId = window.requestAnimationFrame(updateVisibility)
    }

    window.addEventListener('scroll', handleScroll)
    isFramePending = true
    frameId = window.requestAnimationFrame(updateVisibility)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
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
