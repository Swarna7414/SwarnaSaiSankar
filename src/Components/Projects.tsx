import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiGithub, FiGlobe } from 'react-icons/fi'


const projects = [
  {
    name: 'SwaRAG',
    desc: 'Built a full-stack search engine to quickly find and understand programming solutions from Stack Overflow.',
    points: [
      'Collected and stored real-world Q&A data locally, enabling fast and reliable offline search.',
      'Implemented an optimized search system using an inverted index and BM25 ranking for accurate results.',
      'Developed a RAG-based feature to combine multiple answers into clear, structured explanations with code examples.',
      'Created a modern web interface using React and deployed the system with Docker for a smooth, production-ready experience.',
    ],
    tags: ['React', 'Python', 'BM25', 'Hugging Face'],
    live: 'https://swarna7414.github.io/SwaRAG-FrontEnd/',
    github: 'https://github.com/Swarna7414/SwaRAG',
    wip: false,
  },
  {
    name: 'Bitcoin Trading Agent',
    desc: 'Built an AI-powered trading agent that analyzes real-time Bitcoin data and market sentiment to make buy/sell/hold decisions.',
    points: [
      'Implemented a Reinforcement Learning model (PPO) to simulate and optimize trading strategies based on market conditions.',
      'Integrated live Bitcoin price data from the OKX exchange along with news-based sentiment analysis using VADER.',
      'Developed a FastAPI backend with endpoints for trading decisions, news updates, sentiment scores, and system health monitoring.',
      'Deployed the application using Docker on Hugging Face Spaces, enabling a scalable and real-time interactive trading system.',
    ],
    tags: ['React', 'Python', 'ML', 'Reinforcement Learning'],
    live: 'https://swarna7414.github.io/Agent-FrontEnd/Agent',
    github: 'https://github.com/Swarna7414/Agent_Swarna',
    wip: false,
  },
  {
    name: 'DiseaseVision',
    desc: 'Built a full-stack web application using React (frontend) and Spring Boot (backend) to deliver real-time AI-powered medical analysis.',
    points: [
      'Implemented secure authentication using Spring Security, JWT tokens, and OTP-based verification for safe and reliable user access.',
      'Integrated multiple AI models, including dental X-ray analysis (DentiMap), colonoscopy polyp segmentation, and GI tract classification from capsule endoscopy.',
      'Enabled real-time detection and insights such as tooth mapping, anomaly detection, polyp segmentation, and identification of bleeding, ulcers, and lesions.',
      'Used H2 Database for efficient data management and built a scalable system for deploying and testing multiple medical AI models in one platform.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Healthcare AI', 'ML', 'MLOps', 'Spring Boot', 'H2 Database'],
    live: 'https://perceptionintelligencelab.github.io/DiseaseVision',
    github: 'https://github.com/PerceptionIntelligenceLab/DiseaseVision',
    wip: false,
  },
  {
    name: 'GastroVision Challenge',
    desc: 'Developed a web platform for the GastroVision Challenge, enabling users to download datasets and upload model predictions for evaluation.',
    points: [
      'Built a modern frontend using React and Tailwind CSS to create a clean, responsive, and user-friendly interface.',
      'Designed the platform to support a 4-class GI endoscopic image classification task, including normal tissue, polyps, and inflammatory conditions.',
      'Streamlined the workflow for researchers by simplifying dataset access, submission handling, and experiment participation.',
      'Contributed to advancing AI in healthcare by supporting benchmarking of models for real-world endoscopy applications.',
    ],
    tags: ['React', 'HTML', 'CSS', 'Tailwind'],
    live: 'https://perceptionintelligencelab.github.io/GastroVision-Challenge/#home',
    github: 'https://github.com/PerceptionIntelligenceLab/GastroVision-Challenge',
    wip: false,
  },
  {
    name: 'Smart Code Generator',
    desc: 'Built an intelligent backend system that generates, executes, and refines code automatically from natural language input.',
    points: [
      'Designed a modular architecture with components for task classification, code generation, execution, error handling, and iterative improvement.',
      'Implemented real-time code execution and validation to ensure generated solutions are functional and reliable.',
      'Developed an automated debugging loop that analyzes errors and continuously improves code until it runs successfully.',
      'Enabled real-time user interaction using Server-Sent Events (SSE), providing live updates on code generation, execution, and fixes.',
    ],
    tags: ['React', 'TypeScript', 'LangChain'],
    live: 'https://swarna7414.github.io/Smart_Code_Generator_Frontend/',
    github: 'https://github.com/Swarna7414/Smart_Code_Generator',
    wip: false,
  },
  {
    name: 'Chow',
    desc: 'Built a real-time chatting application using Spring Boot and WebSockets for instant message delivery.',
    points: [
      'Implemented secure authentication and user management with Spring Security.',
      'Developed features for live messaging, enabling seamless one-to-one communication between users.',
      'Designed a responsive and interactive chat experience with efficient backend handling of real-time events.',
      'Focused on scalability and low-latency communication to ensure smooth performance in concurrent user environments.',
    ],
    tags: ['Spring Boot', 'WebSockets', 'Spring Security', 'React'],
    live: '',
    wip: true,
  },
]

export default function Projects() {
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
    const chunkSize = isMdUp ? 2 : 1
    const chunks: typeof projects[] = []

    for (let i = 0; i < projects.length; i += chunkSize) {
      chunks.push(projects.slice(i, i + chunkSize))
    }

    return chunks
  }, [isMdUp])

  useEffect(() => {
    setPage((prev) => (prev >= pages.length ? 0 : prev))
  }, [pages.length])

  const nextPage = () => setPage((prev) => (prev + 1) % pages.length)
  const prevPage = () => setPage((prev) => (prev - 1 + pages.length) % pages.length)

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-12">
            Projects
          </h2>

          <div className="relative min-h-[320px] px-0 md:px-10">
            <button
              type="button"
              onClick={prevPage}
              aria-label="Previous projects"
              className="absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.65)] transition-all duration-200"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextPage}
              aria-label="Next projects"
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
                {pages[page].map((proj, i) => (
                  <motion.div
                    key={proj.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                    className={`bg-zinc-900 border rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 group ${
                      proj.wip
                        ? 'border-zinc-800 opacity-40 cursor-default'
                        : 'border-zinc-800 hover:border-zinc-600 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-zinc-100 font-semibold text-sm">{proj.name}</h3>
                      {proj.wip ? (
                        <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded-full shrink-0 ml-2">
                          WIP
                        </span>
                      ) : proj.live || proj.github ? (
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-zinc-600 hover:text-white transition-colors"
                              aria-label={`${proj.name} github repository`}
                            >
                              <FiGithub size={15} />
                            </a>
                          )}
                          {proj.live && (
                            <a
                              href={proj.live}
                              target="_blank"
                              rel="noreferrer"
                              className="text-zinc-600 hover:text-white transition-colors"
                              aria-label={`${proj.name} live demo`}
                            >
                              <FiGlobe size={15} />
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>

                    {proj.points ? (
                      <ul className="text-zinc-400 text-xs leading-relaxed flex-1 space-y-1.5">
                        <li className="text-zinc-300">{proj.desc}</li>
                        {proj.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-400 text-xs leading-relaxed flex-1">{proj.desc}</p>
                    )}

                    {proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
