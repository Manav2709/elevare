'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '/testimonial-1.jpg',
    content:
      'Elevare transformed our online presence completely. Their strategic approach to our digital marketing resulted in a 300% increase in qualified leads within just three months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, Bloom & Grow',
    image: '/testimonial-2.jpg',
    content:
      'Working with Elevare has been a game-changer for our brand. Their creative team delivered a rebrand that perfectly captured our vision and values, and the results have been outstanding.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, GreenLeaf Organics',
    image: '/testimonial-3.jpg',
    content:
      'The team at Elevare took the time to understand our unique challenges and delivered a customized marketing strategy that has helped us reach new markets and grow our customer base significantly.',
    rating: 5,
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don&#39;t just take our word for it. Here&#39;s what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${
                      rating <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-400">
                  {testimonial.rating}.0 out of 5
                </span>
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
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">Trusted by 500+ businesses</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <StarIcon key={rating} className="h-4 w-4 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-400">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
