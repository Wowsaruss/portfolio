// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WorkHistory from '../components/WorkHistory'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 p-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          <span>R</span>
          <span className="text-lime-500">/</span>
          <span>H</span>
        </motion.h1>
      </div>

      <div className="max-w-xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-lime-500 tracking-tight">
              Russell Hayes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-normal">
              Full Stack Software Engineer who likes building stuff with
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {['TypeScript', 'React', 'Node.js', 'AWS', 'Elixir', 'Go', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Datadog', 'Jira'].map((skill) => (
                <div
                  key={skill}
                  className="text-base text-gray-600 dark:text-gray-400 font-normal"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <WorkHistory />

          {/* Footer */}
          <div className="pt-8 text-sm text-gray-500 dark:text-gray-500 font-normal">
            <p>© {new Date().getFullYear()} - Russell Hayes</p>
            <p className="mt-2">Built with Next.js • Hosted on Vercel</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
