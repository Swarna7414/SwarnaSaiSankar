import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/70'
          : ''
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

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-blue-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* mobile hamburger */}
        <button
          className="md:hidden p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="toggle nav"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-5 pt-1 bg-zinc-950 border-b border-zinc-800 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-sm text-zinc-300 hover:text-blue-400 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
