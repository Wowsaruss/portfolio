import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden"
          >
            <Image
              src="/me-1.png"
              alt="Russell Hayes"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-lime-500 dark:text-orange-500 tracking-tight font-martian-mono"
            >
              Russell Hayes
            </motion.h1>
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-4xl font-bold mb-4"
              >
                Full Stack Software Engineer who likes building stuff with <TypeWriter words={['TypeScript', 'React', 'Node.js', 'Elixir', 'GoLang', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Datadog']} className="text-primary dark:text-orange-500" />
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center md:items-start gap-4"
              >
                <SocialLinks />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 