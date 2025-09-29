'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'Brand Transformation',
    description: 'Complete rebranding and digital presence overhaul for a fintech startup.',
    category: 'Brand Strategy',
    image: '/project-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Growth',
    description: '360° digital marketing campaign that increased online sales by 240%.',
    category: 'Digital Marketing',
    image: '/project-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile App Launch',
    description: 'End-to-end marketing strategy for a successful mobile app launch.',
    category: 'Product Marketing',
    image: '/project-3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Content Strategy',
    description: 'Content marketing framework that established thought leadership and drove engagement.',
    category: 'Content Marketing',
    image: '/project-4.jpg',
    link: '#',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

export default function Portfolio() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Recent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work & Success Stories
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our portfolio of successful projects and see how we've helped businesses achieve their marketing goals.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm dark:bg-gray-800 dark:border-gray-700"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center dark:bg-gradient-to-br dark:from-blue-800/10 dark:to-purple-800/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white text-sm font-medium hover:text-blue-200 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    View case study
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
                <span className="text-2xl font-bold text-gray-500 dark:text-gray-300">Project {project.id}</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 rounded-full mb-2 dark:text-blue-400 dark:bg-blue-800/10">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 dark:text-gray-300">{project.title}</h3>
                <p className="text-gray-300 dark:text-gray-500">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-8 transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(147,51,234,1) 50%, rgba(37,99,235,1) 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 50%',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
