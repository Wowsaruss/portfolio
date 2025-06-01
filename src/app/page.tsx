// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WorkHistory from '../components/WorkHistory'
import Header from '../components/Header'
import GitHubContributions from '../components/GitHubContributions'

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 p-3 md:p-6 z-50">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white font-martian-mono"
        >
          <span>R</span>
          <span className="text-lime-500">/</span>
          <span>H</span>
        </motion.h1>
      </div>

      {/* Scrollable Sections */}
      <div className="snap-container">
        {/* Header Section */}
        <section className="snap-section">
          <div className="parallax-bg bg-gradient-to-b from-lime-500/5 to-transparent" />
          <div className="parallax-content">
            <Header />
          </div>
        </section>

        {/* Work History Section */}
        <section className="snap-section min-h-screen relative">
          <div className="parallax-bg bg-gradient-to-b from-transparent to-lime-500/5" />
          <div className="parallax-content w-full h-full flex flex-col">
            <div className="flex-1 flex items-start justify-center overflow-y-auto py-4 md:py-8">
              <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <WorkHistory />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="snap-section min-h-screen relative">
          <div className="parallax-bg bg-gradient-to-b from-lime-500/5 to-transparent" />
          <div className="parallax-content w-full h-full flex flex-col">
            {/* GitHub Contributions - Centered */}
            <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
              <div className="w-full max-w-3xl mx-auto py-6 md:py-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <GitHubContributions />
                </motion.div>
              </div>
            </div>
            
            {/* Copyright - Bottom */}
            <div className="w-full px-4 pb-4 md:pb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-normal text-center"
              >
                <p>© {new Date().getFullYear()} - Russell Hayes</p>
                <p className="mt-1 sm:mt-2">Built with Next.js & Tailwind CSS • Hosted on Vercel</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
