import { motion } from 'framer-motion';

const workHistory = [
  {
    company: "SmartRent",
    role: "Software Engineer II",
    period: "2020 - 2025",
    description: "Built and scaled core customer-facing apps using React, Elixir, Node.js, and PostgreSQL. Led full product lifecycles from concept to deployment, integrated third-party APIs, and improved system performance with background jobs and observability tools like Datadog.",
    technologies: ["React", "TypeScript", "Elixir", "Node.js", "PostgreSQL", "Redis", "Git", "Datadog", "Jira"],
    website: "https://smartrent.com/"
  },
  {
    company: "SIBI",
    role: "Software Engineer",
    period: "2018 - 2020",
    description: "Helped re-architect the backend from REST/SQL to GraphQL/MongoDB. Built scalable microservices with Node.js, Go, and Docker. Designed APIs, improved testing coverage, and worked closely with clients to deliver secure and flexible integrations.",
    technologies: ["React", "TypeScript", "Node.js", "Go", "GraphQL", "Redis", "RabbitMQ", "PostgreSQL", "MongoDB", "Docker", "Git", "Datadog"],
    website: "https://www.sibipro.com/"
  }
];

export default function WorkHistory() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Work History
        </motion.h2>
        
        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${job.website ? 'cursor-pointer' : ''}`}
              onClick={() => job.website && window.open(job.website, '_blank')}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-lime-500 dark:text-orange-500">{job.company}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.period}</p>
              </div>
              
              <p className="mt-4 text-gray-700 dark:text-gray-300">{job.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <a
            href="/2025Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500 dark:bg-orange-500 text-black font-medium rounded-lg hover:bg-lime-400 dark:hover:bg-orange-400 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
} 