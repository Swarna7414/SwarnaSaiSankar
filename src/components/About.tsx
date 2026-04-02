import { motion } from 'framer-motion'


const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '3.9', label: 'GPA (Masters)' },
  { value: '6+', label: 'Projects Built' },
  { value: '9+', label: 'Technologies Used' },
]

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
          <p className="text-zinc-500 text-sm font-mono tracking-widest mb-10">
            // About Me
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* bio text box*/}
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                Hey, I'm Sai Sankar,a full stack developer. I'm a graduate of the
                University of South Dakota with over three years of professional experience.
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

              {/* education box */}
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-xs font-mono tracking-widest mb-4 uppercase">
                  Education
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">M.S. Computer Science</p>
                    <p className="text-zinc-500 text-xs mt-0.5">University of South Dakota · Jan 2025 – May 2026</p>
                    <p className="text-blue-400 text-xs mt-0.5">GPA: 3.9/4</p>
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">B.E. Mechanical Engineering</p>
                    <p className="text-zinc-500 text-xs mt-0.5">Mohan Babu University · 2018 – 2022</p>
                    <p className="text-blue-400 text-xs mt-0.5">GPA: 7.9 / 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* stats grid*/}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="text-3xl font-bold text-zinc-100 mb-1">{s.value}</div>
                  <div className="text-xs text-zinc-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
