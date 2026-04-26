import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-10">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base text-justify">
              <p>
                Hey, I'm Sai Sankar,a full stack developer. I'm a graduate of the
                University of South Dakota with over two years of professional experience.
              </p>
              <p>
                I've spent a good part of my career writing code, most notably at TCS
                where I worked on large-scale banking systems for Citi Bank.
              </p>
              <p>
                My bachelor's degree was actually in mechanical engineering (yeah, a bit
                of a switch), but I got into programming during college and stuck with it.
                I enjoy working at the intersection of well-written software and real-world problems.
              </p>
              <p>
                Right now, I'm contributing to open source projects and continuing to
                build things on the web.
              </p>
            </div>


            <div className="md:col-span-3 w-full min-w-0">
              <p className="text-zinc-500 text-xs font-mono tracking-widest mb-4 uppercase">
                Education
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors min-w-0">
                  <p className="text-zinc-200 text-sm font-medium">M.S. Computer Science</p>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                    University of South Dakota · Jan 2025 – May 2026
                  </p>
                  <p className="text-zinc-200 text-xs mt-2">GPA: 3.9/4</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors min-w-0">
                  <p className="text-zinc-200 text-sm font-medium">B.E. Mechanical Engineering</p>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                    Mohan Babu University · 2018 – 2022
                  </p>
                  <p className="text-zinc-200 text-xs mt-2">GPA: 7.9 / 10</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
