'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Elevate Your
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200">
              Marketing Strategy?
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how we can help you achieve your business goals with our data-driven marketing solutions.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-200"
            >
              Contact Our Team
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-purple-100"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">Our team is ready to help</p>
              <p className="text-xs text-blue-100">Average response time: 2 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/wave.svg')] bg-cover bg-bottom" />
    </section>
  );
}
