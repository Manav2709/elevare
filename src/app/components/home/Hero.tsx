'use client';

import { motion} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import AnimatedHeadline from './AnimatedHeadline';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white pt-32 pb-20 md:pt-50 md:pb-75">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(59,130,246,0.25), rgba(147,51,234,0.25), rgba(236,72,153,0.25))',
          backgroundSize: '300% 300%',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating glowing blobs */}
      {/* Floating glowing blobs */}
<div className="absolute inset-0 -z-0 overflow-hidden">
  {/* Blue blob */}
  <motion.div
    className="absolute top-10 left-20 h-72 w-72 rounded-full bg-blue-500/60 blur-[100px]"
    animate={{
      x: [0, 150, -100, 0],
      y: [0, -120, 60, 0],
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.3, 0.9, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Purple blob */}
  <motion.div
    className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/60 blur-[120px]"
    animate={{
      x: [0, -200, 100, 0],
      y: [0, 100, -80, 0],
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.25, 0.95, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Pink blob */}
  <motion.div
    className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/50 blur-[140px]"
    animate={{
      x: [0, 80, -120, 0],
      y: [0, -150, 100, 0],
      opacity: [0.5, 0.9, 0.5],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block">Elevate Your Brand With</span>
          <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2 pt-2">
           
            <AnimatedHeadline />
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We craft growth-driven marketing strategies powered by creativity, technology, and data — helping your brand stand out in the digital era.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.span
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-200"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(147,51,234,1) 50%, rgba(37,99,235,1) 100%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '0% 50%',
              }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              Get Started
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </motion.span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <PlayCircleIcon className="-ml-1 mr-2 h-5 w-5" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}