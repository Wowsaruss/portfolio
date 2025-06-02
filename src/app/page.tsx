// pages/index.tsx (Next.js + TypeScript Portfolio Home Page)

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WorkHistory from '../components/WorkHistory'
import Header from '../components/Header'
import GitHubContributions from '../components/GitHubContributions'
import ParallaxContainer from '../components/ParallaxContainer'
import LogoHeader from '../components/LogoHeader'

const ScrollArrow = ({ sectionIndex }: { sectionIndex: number }) => {
  const handleClick = () => {
    const sections = document.querySelectorAll('.snap-section');
    if (sectionIndex < sections.length - 1) {
      sections[sectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-gray-500 dark:text-gray-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <LogoHeader />

      {/* Scrollable Sections */}
      <ParallaxContainer>
        <div className="snap-container">
          {/* Header Section */}
          <section className="snap-section">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="parallax-bg bg-lime-500/10 dark:bg-orange-500/20" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="parallax-bg bg-white dark:bg-black clip-diagonal" 
            />
            <div className="parallax-content">
              <Header />
              <ScrollArrow sectionIndex={0} />
            </div>
          </section>

          {/* Work History Section */}
          <section className="snap-section min-h-screen">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="parallax-bg bg-gray-100 dark:bg-gray-800" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="parallax-bg bg-lime-500/10 dark:bg-orange-500/20 clip-diagonal-reverse" 
            />
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
              <ScrollArrow sectionIndex={1} />
            </div>
          </section>

          {/* Footer Section */}
          <section className="snap-section min-h-screen">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="parallax-bg bg-lime-500/10 dark:bg-orange-500/20" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="parallax-bg bg-gray-100 dark:bg-gray-800 clip-diagonal" 
            />
            <div className="parallax-content w-full h-full flex flex-col">
              {/* GitHub Contributions - Centered */}
              <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12">
                <div className="w-full max-w-[1300px] mx-auto py-6 md:py-12">
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
      </ParallaxContainer>
    </main>
  )
}
