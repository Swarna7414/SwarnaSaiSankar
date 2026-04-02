import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-zinc-600 text-xs border-t border-zinc-800/50">
        <p>Designed & Built by Sai Sankar Swarna</p>
      </footer>
    </div>
  )
}
