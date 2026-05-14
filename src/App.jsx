import { useEffect, useMemo, useState } from 'react'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ProfilesSection from './components/ProfilesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const isDark = theme === 'dark'
  const toggleTheme = () => setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const appClassName = useMemo(
    () =>
      `min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950 text-slate-100'
          : 'bg-amber-50 text-slate-900'
      }`,
    [isDark],
  )

  return (
    <div className={appClassName}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Element name="home">
          <HeroSection isDark={isDark} />
        </Element>
        <Element name="about">
          <AboutSection isDark={isDark} />
        </Element>
        <Element name="skills">
          <SkillsSection isDark={isDark} />
        </Element>
        <Element name="projects">
          <ProjectsSection isDark={isDark} />
        </Element>
        <Element name="profiles">
          <ProfilesSection isDark={isDark} />
        </Element>
        <Element name="contact">
          <ContactSection isDark={isDark} />
        </Element>
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
