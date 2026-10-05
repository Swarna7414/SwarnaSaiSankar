import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'

import {
  FaReact,
  FaJava,
  FaHtml5,
  FaJenkins,
  FaAngular,
  FaBootstrap,
} from 'react-icons/fa'

import { FaAws } from 'react-icons/fa6'

import { DiPython } from 'react-icons/di'

import {
  BiLogoPostgresql,
  BiLogoTypescript,
} from 'react-icons/bi'

import {
  SiKubernetes,
  SiGithubactions,
  SiSpring,
  SiSpringboot,
  SiRedux,
  SiJunit5,
  SiApachekafka,
  SiRabbitmq,
  SiOracle,
  SiMongodb,
  SiPostman,
  SiSonarqube,
} from 'react-icons/si'

import {
  MdSettingsSuggest,
  MdSecurity,
  MdAutoAwesome,
  MdStorage,
} from 'react-icons/md'

import { IoLogoDocker } from 'react-icons/io5'

const groups = [
  {
    category: 'Languages',
    skills: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'SQL',
      'PL/SQL',
    ],
  },

  {
    category: 'Backend',
    skills: [
      'Spring Boot',
      'Spring MVC',
      'Spring Cloud',
      'Spring Security',
      'Microservices',
      'REST APIs',
      'Hibernate & JPA',
      'Spring Batch',
    ],
  },

  {
    category: 'Frontend',
    skills: [
      'React',
      'Angular',
      'Redux',
      'NgRx',
      'HTML5 & CSS3',
      'Bootstrap',
    ],
  },

  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'OpenShift',
      'Jenkins',
      'GitHub Actions',
      'Maven',
      'CI/CD',
      'Monitoring',
    ],
  },

  {
    category: 'Messaging & Data',
    skills: [
      'Apache Kafka',
      'RabbitMQ',
      'AWS SQS',
      'Oracle',
      'PostgreSQL',
      'MongoDB',
    ],
  },

  {
    category: 'Security, AI & Quality',
    skills: [
      'OAuth 2.0',
      'JWT',
      'OIDC',
      'RBAC',
      'Generative AI',
      'LLM APIs',
      'JUnit 5',
      'Mockito',
      'Postman',
      'SonarQube',
    ],
  },
]

const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  Python: DiPython,
  JavaScript: FaJava,
  TypeScript: BiLogoTypescript,
  SQL: MdStorage,
  'PL/SQL': MdStorage,

  'Spring Boot': SiSpringboot,
  'Spring MVC': SiSpring,
  'Spring Cloud': SiSpring,
  'Spring Security': SiSpring,
  Microservices: SiSpring,
  'REST APIs': MdSettingsSuggest,
  'Hibernate & JPA': SiSpring,
  'Spring Batch': SiSpring,

  React: FaReact,
  Angular: FaAngular,
  Redux: SiRedux,
  NgRx: SiRedux,
  'HTML5 & CSS3': FaHtml5,
  Bootstrap: FaBootstrap,

  AWS: FaAws,
  Docker: IoLogoDocker,
  Kubernetes: SiKubernetes,
  OpenShift: SiKubernetes,
  Jenkins: FaJenkins,
  'GitHub Actions': SiGithubactions,
  Maven: MdSettingsSuggest,
  'CI/CD': MdSettingsSuggest,
  Monitoring: MdSettingsSuggest,

  'Apache Kafka': SiApachekafka,
  RabbitMQ: SiRabbitmq,
  'AWS SQS': FaAws,
  Oracle: SiOracle,
  PostgreSQL: BiLogoPostgresql,
  MongoDB: SiMongodb,

  'OAuth 2.0': MdSecurity,
  JWT: MdSecurity,
  OIDC: MdSecurity,
  RBAC: MdSecurity,

  'Generative AI': MdAutoAwesome,
  'LLM APIs': MdAutoAwesome,

  'JUnit 5': SiJunit5,
  Mockito: SiJunit5,
  Postman: SiPostman,
  SonarQube: SiSonarqube,
}

const scrollableCategories = [
  'Backend',
  'Cloud & DevOps',
  'Security, AI & Quality',
]

export default function Skills() {
  const [page, setPage] = useState(0)
  const [isMdUp, setIsMdUp] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
        [groups[4], groups[5]],
      ]
    }

    return groups.map((group) => [group])
  }, [isMdUp])

  useEffect(() => {
    setPage((prev) => (prev >= pages.length ? 0 : prev))
  }, [pages.length])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % pages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [pages.length, isHovered])

  const nextPage = () => {
    setPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

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


          <div
            className="relative min-h-[360px] px-0 md:px-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

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
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="grid md:grid-cols-2 gap-4"
              >
                {pages[page].map((group, i) => {
                  const isScrollable = scrollableCategories.includes(
                    group.category,
                  )

                  return (
                    <motion.div
                      key={group.category}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                      }}
                      className="h-[360px] bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition-all duration-200"
                    >

                      <h3 className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                        {group.category}
                      </h3>


                      <div
                        className={
                          isScrollable
                            ? 'h-[295px] overflow-y-auto pr-2 custom-scrollbar'
                            : ''
                        }
                      >
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
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}