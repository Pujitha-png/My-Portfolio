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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Element name="home">
          <HeroSection />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        <Element name="skills">
          <SkillsSection />
        </Element>
        <Element name="projects">
          <ProjectsSection />
        </Element>
        <Element name="profiles">
          <ProfilesSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
