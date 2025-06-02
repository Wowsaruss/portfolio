'use client'

import React, { useEffect } from 'react'

export default function ParallaxContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      document.documentElement.style.setProperty('--scroll', `${scrollPosition}px`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <>{children}</>
} 