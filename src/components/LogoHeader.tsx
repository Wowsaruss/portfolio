'use client'

import { motion } from 'framer-motion'

export default function LogoHeader() {
  return (
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
  )
} 