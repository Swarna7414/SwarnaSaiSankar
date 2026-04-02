import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'


const roles = [
  'Full Stack Developer',
  'University of South Dakota Graduate',
  'Exploring Generative AI',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

 
  useEffect(() => {
    const current = roles[roleIdx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), 38)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setRoleIdx((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [text, deleting, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-16"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest">
            hi there, i'm
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            <span className="text-zinc-100">Sai Sankar</span>
            <br />
            <span className="text-zinc-500">Swarna</span>
          </h1>


          <div className="flex items-center gap-2 h-9">
            <span className="text-xl md:text-2xl text-zinc-300 font-light">
              {text}
            </span>
            <span className="inline-block w-0.5 h-6 bg-blue-400 animate-pulse" />
          </div>

          <p className="text-zinc-400 max-w-md leading-relaxed text-sm md:text-base">
            I enjoy building things for the web. I’m a full stack developer with over 3 years of experience, and I graduated from the University of South Dakota.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Say hello
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-zinc-100 text-sm rounded-lg transition-colors"
            >
              View projects
            </a>
          </div>

          {/* social icons */}
          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://github.com/Swarna7414"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="github profile"
            >
              <FiGithub size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/swarna-sai-sankar-a1084a203"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="linkedin"
            >
              <FiLinkedin size={19} />
            </a>
            <a
              href="mailto:swarnasaisankar333@gmail.com"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="email me"
            >
              <FiMail size={19} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
