import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'


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
