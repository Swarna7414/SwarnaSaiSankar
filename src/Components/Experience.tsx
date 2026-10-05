import { motion } from 'framer-motion'


const jobs = [
  {
    company: 'Deutsche Bank',
    role: 'Sr. Full Stack Java Developer',
    period: 'Jan 2026 – Present',
    note: 'Irving, TX',
    bullets: [
      'Build scalable banking applications using Java 17/21, Spring Boot, Spring Cloud, REST APIs, and microservices, with a focus on performance and reliability.',
      'Develop responsive banking interfaces using Angular, TypeScript, RxJS, and NgRx, while working closely with backend services to create a smooth user experience.',
      'Secure applications and transaction workflows using Spring Security, OAuth 2.0, JWT, OIDC, RBAC, and API Gateway across distributed services.',
      'Build cloud native and event driven solutions using AWS, Docker, Kubernetes, Kafka, and RabbitMQ to support reliable and scalable systems.',
      'Explore Generative AI and LLM integrations for document summarization, customer assistance, transaction insights, and knowledge retrieval, while supporting automated testing, CI/CD, and application monitoring.'
    ],
  },
  {
    company: 'University of South Dakota',
    role: 'Graduate Research Assistant',
    period: 'Jan 2025 – Dec 2025',
    note: 'On Campus',
    bullets: [
    'Built 5+ AI powered web applications using React, Tailwind CSS, Spring Boot, and REST APIs, creating responsive and scalable frontend and backend components.',
    'Integrated AI models into DiseaseVision through Spring Boot APIs for medicals image and video analysis, achieving 85% diagnostic accuracy.',
    'Implemented secure authentication with JWT, OAuth 2.0, and OTP, along with Docker and Git-based CI/CD workflows for reliable AWS deployments.',
   ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Full Stack Java Developer',
    period: 'Jul 2022 – Dec 2024',
    note: 'India',
    bullets: [
      'Built scalable banking applications using Java 11/17, Spring Boot, Spring MVC, and REST APIs, supporting secure account, payment, and transaction workflows.',
      'Developed responsive financial applications using React, TypeScript, Redux, and Bootstrap, creating reusable components and connecting them with backend services.',
      'Designed event driven and cloud based microservices using Spring Cloud, Kafka, AWS SQS, Docker, Kubernetes, and OpenShift for reliable and scalable systems.',
      'Secured customer and transaction data using Spring Security, OAuth 2.0, JWT, and RBAC, while working with Oracle, MongoDB, Hibernate, and JPA for data management.',
      'Worked on testing, production support, monitoring, and troubleshooting using JUnit, Mockito, Postman, ELK, Splunk, and Datadog to improve application stability and resolve issues.'
    ],
  },
  {
    company: 'Genpact',
    role: 'Junior Developer',
    period: 'Jan 2021 – May 2022',
    note: 'India',
    bullets: [
    'Developed healthcare applications using Java 8, Spring Boot, Spring MVC, and REST APIs, supporting business critical workflows in an Agile environment.',
    'Built Spring Boot microservices, Spring Batch jobs, and integration workflows for healthcare data processing and asynchronous system communication.',
    'Worked with AWS services including EC2, RDS, S3, VPC, CloudWatch, and CloudFormation to support reliable deployments and cloud infrastructure.',
    'Improved application performance and stability through Hibernate, JPA, Oracle, SQL, and CI/CD with Jenkins and Maven, while supporting production troubleshooting and root cause analysis.'
    ],
  },
  {
    company: 'Open Source',
    role: 'Contributor',
    period: 'May 2025 – Jan 2026',
    note: '',
    bullets: [
      'Investigated and fixed issues by navigating large codebases, debugging Java and Spring based components, and submitting pull requests that addressed bugs, edge cases, and minor feature gaps.',
      'Improved code reliability by writing and updating JUnit based unit tests, validating fixes locally, and ensuring changes did not break existing functionality before submitting PRs.',
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
