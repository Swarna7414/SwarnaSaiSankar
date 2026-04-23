import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'


const projects = [
  {
    name: 'SwaRAG',
    desc: 'Designed a custom search engine for Stack Overflow content using BM25 ranking, title boosting, and score weighting to improve result relevance.',
    tags: ['React', 'Python', 'LLM', 'Hugging Face'],
    live: 'https://swarna7414.github.io/SwaRAG-FrontEnd/',
    wip: false,
  },
  {
    name: 'Bitcoin Trading Agent',
    desc: 'RL agent for bitcoin trading trained on historical price data. More of an experiment than something prod-ready but was a lot of fun to build.',
    tags: ['React', 'Python', 'ML', 'Reinforcement Learning'],
    live: 'https://swarna7414.github.io/Agent-FrontEnd/',
    wip: false,
  },
  {
    name: 'DiseaseVision',
    desc: 'A healthcare platform with multiple AI health models for different organs, making disease analysis and screening easier from one place.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Healthcare AI'],
    live: 'https://perceptionintelligencelab.github.io/DiseaseVision',
    wip: false,
  },
  {
    name: 'GastroVision Challenge',
    desc: 'Website for a medical imaging challenge focused on gastrointestinal disease classification. Built for a perception intelligence research lab.',
    tags: ['React', 'HTML', 'CSS'],
    live: 'https://perceptionintelligencelab.github.io/GastroVision-Challenge/#home',
    wip: false,
  },
  {
    name: 'Smart Code Generator',
    desc: 'An AI system that generates code, runs it, detects errors, and improves the solution automatically.',
    tags: ['React', 'TypeScript', 'LangChain'],
    live: 'https://swarna7414.github.io/Smart_Code_Generator_Frontend/',
    wip: false,
  },
  {
    name: 'Chow',
    desc: 'Chatting app built with Spring WebSockets includes security, login features, and real-time messaging.',
    tags: ['Spring Boot', 'WebSockets', 'Spring Security', 'React'],
    live: '',
    wip: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-zinc-500 text-sm font-mono tracking-widest mb-12">
            // projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`bg-zinc-900 border rounded-xl p-5 flex flex-col gap-3 transition-colors group ${
                  proj.wip
                    ? 'border-zinc-800 opacity-40 cursor-default'
                    : 'border-zinc-800 hover:border-blue-500/40'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-zinc-100 font-semibold text-sm">{proj.name}</h3>
                  {proj.wip ? (
                    <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded-full shrink-0 ml-2">
                      WIP
                    </span>
                  ) : proj.live ? (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-600 hover:text-blue-400 transition-colors shrink-0 ml-2"
                      aria-label={`${proj.name} live demo`}
                    >
                      <FiExternalLink size={15} />
                    </a>
                  ) : null}
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed flex-1">{proj.desc}</p>

                {proj.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-zinc-800 text-blue-300/60 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
