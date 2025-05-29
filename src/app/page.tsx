// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              R/H
            </h1>
            <h2 className="text-base text-gray-600 dark:text-gray-400 font-normal">
              Who am I?
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
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
