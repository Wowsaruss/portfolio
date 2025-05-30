// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WorkHistory from '../components/WorkHistory'
import TypeWriter from '../components/TypeWriter'
import Image from 'next/image'

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

      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Main Content */}
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
                    Full Stack Software Engineer who likes building stuff with <TypeWriter words={['TypeScript', 'React', 'Node.js', 'Elixir', 'Go', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Datadog']} className="text-primary" />
                  </h1>
                </div>
              </div>
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
