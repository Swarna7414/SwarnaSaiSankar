import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          hasScrolled ? 'bg-zinc-950/95' : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-zinc-100 select-none text-3xl leading-none"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            SWARNA
          </a>

          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="toggle nav"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>


      <AnimatePresence>
        {open && (
          <>

            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />


            <motion.div
              className="fixed top-0 right-0 h-full w-64 z-50 bg-zinc-900 border-l border-zinc-800 flex flex-col pt-6 pb-8 px-6 gap-6 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >

              <button
                onClick={closeMenu}
                className="self-end text-zinc-400 hover:text-zinc-100 transition-colors mb-4"
                aria-label="close menu"
              >
                <FiX size={22} />
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-zinc-300 hover:text-white text-base transition-colors border-b border-zinc-800 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
