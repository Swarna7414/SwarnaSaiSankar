import { motion } from 'framer-motion'


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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-zinc-500 text-sm font-mono tracking-widest mb-12">
            // Skills
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {groups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700/80 text-zinc-300 text-xs rounded-full transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
