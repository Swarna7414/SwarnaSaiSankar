import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profilePic from '../assets/Picture.png'


const roles = [
  'Full Stack Developer',
  'University of South Dakota Graduate',
  'Exploring Generative AI',
]

type Ripple = { id: number; x: number; y: number }

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = useCallback((e: React.MouseEvent) => {
    const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
    setRipples((prev) => [...prev, newRipple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 1000)
  }, [])


  const imgRef = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 150, damping: 20 })
  const springY = useSpring(rawY, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return
    const rect = imgRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rawX.set(x)
    rawY.set(y)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

 
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
      onClick={handleClick}
    >
      {/* ink splatter on Animaton */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed z-[9999]"
            style={{ left: ripple.x, top: ripple.y }}
          >
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = Math.random() * 360
              const distance = 20 + Math.random() * 80
              const rad = (angle * Math.PI) / 180
              const tx = Math.cos(rad) * distance
              const ty = Math.sin(rad) * distance
              const w = 6 + Math.random() * 14
              const h = 4 + Math.random() * 10
              const rotate = Math.random() * 360
              const colors = ['#3b82f6', '#60a5fa', '#1d4ed8', '#93c5fd', '#2563eb']
              const color = colors[Math.floor(Math.random() * colors.length)]
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: w,
                    height: h,
                    background: color,
                    borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%',
                    left: -w / 2,
                    top: -h / 2,
                    rotate,
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: tx, y: ty, opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.5 + Math.random() * 0.4, ease: 'easeOut' }}
                />
              )
            })}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6 flex-1"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest">
            Hi there, I'm
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

        {/* profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="shrink-0"
        >
          <motion.div
            ref={imgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 800, boxShadow: '5px 5px 0px rgba(59,130,246,0.6)' }}
            className="hidden lg:block w-72 2xl:w-[332px] rounded-xl overflow-hidden border border-blue-500 cursor-pointer shrink-0"
          >
            <img
              src={profilePic}
              alt="Sai Sankar Swarna"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
