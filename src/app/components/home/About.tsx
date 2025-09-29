'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircleIcon, LightBulbIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Data-Driven Approach',
    description: 'We base our strategies on solid data and analytics to ensure measurable results and continuous optimization.',
    icon: ScaleIcon,
  },
  {
    name: 'Creative Excellence',
    description: 'Our team of creative minds delivers innovative solutions that capture attention and inspire action.',
    icon: SparklesIcon,
  },
  {
    name: 'Strategic Thinking',
    description: 'We develop comprehensive strategies tailored to your unique business goals and market position.',
    icon: LightBulbIcon,
  },
  {
    name: 'Proven Results',
    description: 'Our track record of success speaks for itself, with measurable growth for businesses of all sizes.',
    icon: CheckCircleIcon,
  },
];

export default function About() {
  return (
    <section className="bg-transparent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-30" />
              <div className="relative h-full w-full">
                <div className="h-[400px] w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-500">Team at work</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20" />
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-6 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              We're Not Just Marketers, We're
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Growth Partners
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-300">
              At Elevare, we believe in building lasting partnerships with our clients. We take the time to understand your business inside and out, allowing us to create customized marketing solutions that drive real results.
            </p>
            
            <dl className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.name} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-white">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/about"
                className="inline-flex items-center text-base font-medium text-blue-400 hover:text-blue-300"
              >
                Learn more about our approach
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
