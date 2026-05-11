import { motion } from 'framer-motion'


const jobs = [
  {
    company: 'Tata Consultancy Services',
    role: 'Software Engineer - Ⅰ',
    period: 'Jul 2022 – Dec 2024',
    note: 'Client: Citi Bank',
    bullets: [
      'Played a key role in developing Spring Boot microservices, applying domin driven design principles and using an API Gateway pattern.',
      'Developed RESTful APIs in Spring Boot adhering to the MVC architectural design and leveraging JSON request and response messages, coupled with Spring Data JPA and Hibernate.',
      'Implemented dependency injection and inversion of control concepts in order to develop loosely-coupled and maintainable services, achieving more than 80% code test coverage through JUnit and Mockito.',
      'Used Streams, Collections, multithreading, and patterns such as Singleton, Factory, and Builder pattern to improve code readability and maintainability.',
      'Implementation of automated CI/CD pipeline using Jenkins, code analysis using SonarQube to ensure code quality and container management through OpenShift for deployment.',
      'Collaborated with frontend teams to integrate React-based UIs with backend microservices, ensuring efficient API consumption and a seamless user experience.',
    ],
  },
  {
    company: 'University of South Dakota',
    role: 'Graduate Research Assistant',
    period: 'Jan 2025 – May 2026',
    note: '',
    bullets: [
      'Built React based front end user interfaces using custom hooks, React forms, and Tailwind CSS to enable the access of AI Health care models through web applications.',
      'Integrated Python based model APIs and back-end systems in the front-end to ensure that real-time output and visual representations are provided.',
      'Worked alongside faculty members and researchers to implement academic needs into useful UI components.',
    ],
  },
  {
    company: 'Open Source',
    role: 'Contributor',
    period: 'May 2025 – Jan 2026',
    note: '',
    bullets: [
      'Investigated and fixed issues by navigating large codebases, debugging Java and Spring-based components, and submitting pull requests that addressed bugs, edge cases, and minor feature gaps.',
      'Improved code reliability by writing and updating JUnit-based unit tests, validating fixes locally, and ensuring changes did not break existing functionality before submitting PRs.',
      'Collaborated with maintainers through GitHub pull requests, issue discussions, and code reviews, adapting to different project architectures, CI checks, and contribution workflows.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-12">
            Experience
          </h2>

          <div className="space-y-5">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-zinc-100 font-semibold text-base">{job.company}</h3>
                    <p className="text-zinc-200 text-sm">{job.role}</p>
                    {job.note && (
                      <p className="text-zinc-600 text-xs mt-0.5">{job.note}</p>
                    )}
                  </div>
                  <span className="text-zinc-500 text-xs font-mono shrink-0">{job.period}</span>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed lg:text-justify">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
