'use client';

import { motion, Variants } from 'framer-motion';
import { ChartBarIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRippleIcon, EnvelopeOpenIcon, FilmIcon, LightBulbIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Brand Strategy',
    description: 'Comprehensive brand development including naming, positioning, and identity design to establish a strong market presence.',
    icon: LightBulbIcon,
  },
  {
    name: 'Digital Marketing',
    description: 'Full-service digital marketing including SEO, PPC, and social media to increase your online visibility and engagement.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Content Marketing',
    description: 'Compelling content strategies that tell your brand story and engage your target audience across multiple channels.',
    icon: EnvelopeOpenIcon,
  },
  {
    name: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Creative Design',
    description: 'Stunning visual design that captures attention and communicates your brand message effectively.',
    icon: CursorArrowRippleIcon,
  },
  {
    name: 'Video Production',
    description: 'High-quality video content that tells your story and connects with your audience on an emotional level.',
    icon: FilmIcon,
  },
  {
    name: 'Analytics',
    description: 'Data-driven insights and performance tracking to optimize your marketing strategies and maximize ROI.',
    icon: ChartBarIcon,
  },
  {
    name: 'Marketing Automation',
    description: 'Streamline your marketing efforts with automated workflows that nurture leads and drive conversions.',
    icon: CommandLineIcon,
  },
];
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Services() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We offer a full suite of marketing services designed to help your business grow and succeed in today's competitive landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index % 4}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -top-6 left-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">{service.name}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="/services"
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
            View All Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
