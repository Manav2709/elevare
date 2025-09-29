'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,1),rgba(0,0,0,0))]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Elevate Your Brand With</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data-Driven Marketing
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help businesses grow through innovative marketing strategies that combine creativity, technology, and data to deliver exceptional results.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(147,51,234,1) 50%, rgba(37,99,235,1) 100%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 50%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
                whileHover={{ scale: 1.02 }}
              >
                Get Started
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </motion.span>
            </Link>
            
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <PlayCircleIcon className="-ml-1 mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-gray-400 tracking-wide uppercase">Trusted by innovative companies worldwide</p>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              {[
                'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
                'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
                'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
                'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
                'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
              ].map((logo, index) => (
                <div key={index} className="col-span-1 flex justify-center">
                  <img
                    className="h-12 opacity-60 invert hover:opacity-90 transition-opacity"
                    src={logo}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
