import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-zinc-500 text-sm font-mono tracking-widest mb-6">
            // Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Let's work together
          </h2>

          <p className="text-zinc-400 mb-10 leading-relaxed text-sm md:text-base">
            I'm always open to new opportunities and interesting projects.
            Whether it's a job, a collab, or just want to talk tech shoot me an email.
          </p>

          <a
            href="mailto:swarnasaisankar333@gmail.com"
            className="inline-block px-8 py-3 bg-white hover:bg-zinc-100 text-black text-sm font-medium rounded-lg transition-colors mb-12"
          >
            swarnasaisankar333@gmail.com
          </a>

          
          <div className="flex justify-center gap-8 text-zinc-500">
            <a
              href="https://github.com/Swarna7414"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/swarna-sai-sankar-a1084a203"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:swarnasaisankar333@gmail.com"
              className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm"
            >
              <FiMail size={16} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
