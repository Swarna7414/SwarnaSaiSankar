import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { FaReact, FaJava, FaHtml5, FaJenkins } from 'react-icons/fa'
import { FaAws, FaGithub } from 'react-icons/fa6'
import { DiPython } from 'react-icons/di'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { SiKubernetes, SiGithubactions, SiMysql, SiPostman, SiSpring, SiSpringboot, SiMui, SiJunit5 } from 'react-icons/si'
import { MdSettingsSuggest } from 'react-icons/md'
import { IoLogoDocker } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'


const groups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'HTML & CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'React', 'Tailwind CSS', 'Material UI', 'JUnit & Mockito'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS (EC2, ECS, EKS, Lambda)', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Tools & Databases',
    skills: ['Git / GitHub / Bitbucket', 'PostgreSQL', 'MySQL', 'Postman', 'REST APIs', 'Microservices'],
  },
]

const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  Python: DiPython,
  TypeScript: BiLogoTypescript,
  'HTML & CSS': FaHtml5,
  'Spring Boot': SiSpringboot,
  React: FaReact,
  'Tailwind CSS': RiTailwindCssFill,
  'Material UI': SiMui,
  'JUnit & Mockito': SiJunit5,
  Docker: IoLogoDocker,
  Kubernetes: SiKubernetes,
  'AWS (EC2, ECS, EKS, Lambda)': FaAws,
  Jenkins: FaJenkins,
  'GitHub Actions': SiGithubactions,
  'Git / GitHub / Bitbucket': FaGithub,
  PostgreSQL: BiLogoPostgresql,
  MySQL: SiMysql,
  Postman: SiPostman,
  'REST APIs': MdSettingsSuggest,
  Microservices: SiSpring,
}

export default function Skills() {
  const [page, setPage] = useState(0)
  const [isMdUp, setIsMdUp] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMdUp(event.matches)
    }

    setIsMdUp(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  const pages = useMemo(() => {
    if (isMdUp) {
      return [
        [groups[0], groups[1]],
        [groups[2], groups[3]],
      ]
    }

    return groups.map((group) => [group])
  }, [isMdUp])

  useEffect(() => {
    setPage((prev) => (prev >= pages.length ? 0 : prev))
  }, [pages.length])

  const nextPage = () => setPage((prev) => (prev + 1) % pages.length)
  const prevPage = () => setPage((prev) => (prev - 1 + pages.length) % pages.length)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-12">
            Skills
          </h2>

          <div className="relative min-h-[280px] px-0 md:px-10">
            <button
              type="button"
              onClick={prevPage}
              aria-label="Previous skill groups"
              className="absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.65)] transition-all duration-200"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextPage}
              aria-label="Next skill groups"
              className="absolute right-0 md:-right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.65)] transition-all duration-200"
            >
              <FiChevronRight size={18} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid md:grid-cols-2 gap-4"
              >
                {pages[page].map((group, i) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition-all duration-200"
                  >
                    <h3 className="text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => {
                        const SkillIcon = skillIcons[skill]
                        return (
                          <li
                            key={skill}
                            className="group min-h-10 px-1 text-zinc-200 text-xs flex items-center gap-2"
                          >
                            <span className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                              <span className="absolute w-1.5 h-1.5 rounded-full bg-white transition-all duration-200 group-hover:opacity-0 group-hover:scale-50" />
                              {SkillIcon && (
                                <SkillIcon className="absolute text-sm text-zinc-100 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
                              )}
                            </span>
                            <span>{skill}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
