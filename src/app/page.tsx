// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Russell Hayes | Software Engineer</title>
        <meta name="description" content="Portfolio of Russell Hayes, Software Engineer & Hobby Farmer" />
      </Head>

      <main className="p-8 max-w-4xl mx-auto font-sans">
        <h1 className="text-4xl font-bold mb-2">Russell Hayes</h1>
        <p className="text-lg text-gray-600 mb-4">Software Engineer 🧑💻 | Hobby Farmer 🐮</p>

        <div className="mb-6">
          <a href="mailto:russell.hayes.dev@gmail.com" className="block text-blue-600 hover:underline">russell.hayes.dev@gmail.com</a>
          <a href="https://github.com/Wowsaruss" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/russell-hayes" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">LinkedIn</a>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p>JavaScript, TypeScript, Node.js, React, Elixir, GoLang, GraphQL, REST, PostgreSQL, MongoDB, Docker, AWS, RabbitMQ, Redis, Git, Datadog, Jira</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">SmartRent</h3>
            <p className="italic">March 2020 - April 2025</p>
            <p>Led development of customer-facing apps using React, Elixir, and PostgreSQL. Managed full product lifecycles, integrated third-party services, built robust APIs, and optimized performance across large deployments.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">SIBI</h3>
            <p className="italic">January 2018 - March 2020</p>
            <p>Designed scalable systems using Node.js, Go, MongoDB, and GraphQL. Built secure APIs, migrated architectures, and improved backend stability and test coverage.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Knight Transportation</h3>
            <p className="italic">August 2014 - September 2017</p>
            <p>Managed payroll, recruitment, and training for over 5,000 drivers. Streamlined error handling and maintained communication with new and current employees.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside">
            <li>DevMountain – Full-Stack Web Development, 2017</li>
            <li>Brigham Young University – Business Management (Marketing), 2014–2015</li>
            <li>Estrella Mountain Community College – General Studies, 2008</li>
            <li>Glendale Community College – Photography, 2007</li>
          </ul>
        </section>
      </main>
    </>
  );
}
