import { motion } from 'framer-motion';

const workHistory = [
  {
    company: "SmartRent",
    role: "Software Engineer II",
    period: "2020 - 2025",
    description: "Led development of key features and improvements. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "TypeScript", "Elixir", "Node.js", "PostgreSQL", "Git", "Datadog", "Jira"]
  },
  {
    company: "SIBI",
    role: "Software Engineer",
    period: "2018 - 2020",
    description: "Developed and maintained web applications. Implemented responsive designs and optimized application performance.",
    technologies: ["React", "TypeScript", "Node.js", "Go", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Git", "Datadog"]
  }
];

export default function WorkHistory() {
  return (
    <section className="py-16 bg-light-darker dark:bg-dark-lighter">
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
              className="bg-white dark:bg-dark rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-lime-500">{job.company}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.period}</p>
              </div>
              
              <p className="mt-4 text-gray-700 dark:text-gray-300">{job.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 