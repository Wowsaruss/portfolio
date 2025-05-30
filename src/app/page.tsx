// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WorkHistory from '../components/WorkHistory'
import TypeWriter from '../components/TypeWriter'
import Image from 'next/image'
import GitHubContributions from '../components/GitHubContributions'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 p-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white font-martian-mono"
        >
          <span>R</span>
          <span className="text-lime-500">/</span>
          <span>H</span>
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <div className="relative w-72 h-72 rounded-full overflow-hidden">
                <Image
                  src="/me-1.png"
                  alt="Russell Hayes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-7xl font-bold text-lime-500 tracking-tight font-martian-mono">
                  Russell Hayes
                </h1>
                <div className="max-w-4xl">
                  <h1 className="text-4xl font-bold mb-4">
                    Full Stack Software Engineer who likes building stuff with <TypeWriter words={['TypeScript', 'React', 'Node.js', 'Elixir', 'GoLang', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Datadog']} className="text-primary" />
                  </h1>
                  <a
                    href="/2025Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Contributions */}
          <GitHubContributions />

          {/* Work History */}
          <WorkHistory />

          {/* Footer */}
          <div className="flex justify-center">
            <a
              href="https://github.com/Wowsaruss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500 hover:text-lime-400 transition-colors duration-200"
            >
              View GitHub Profile →
            </a>
          </div>
          <div className="pt-8 text-sm text-gray-500 dark:text-gray-500 font-normal">
            <p>© {new Date().getFullYear()} - Russell Hayes</p>
            <p className="mt-2">Built with Next.js & Tailwind CSS • Hosted on Vercel</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
