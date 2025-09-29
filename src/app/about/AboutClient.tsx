'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SparklesIcon, LightBulbIcon, BoltIcon, UsersIcon, CheckBadgeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const values = [
  { title: 'Data-Driven', desc: 'Decisions grounded in research, experimentation, and measurable outcomes.', icon: LightBulbIcon },
  { title: 'Creative Excellence', desc: 'Distinctive ideas and refined craft across brand, content, and product.', icon: SparklesIcon },
  { title: 'Velocity', desc: 'Operate with clarity and speed—iterate, learn, and scale.', icon: BoltIcon },
  { title: 'Partnership', desc: 'Stand shoulder-to-shoulder with your team as growth partners.', icon: UsersIcon },
];

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '300+' },
  { label: 'Avg. Client NPS', value: '95' },
  { label: 'Industries Served', value: '20+' },
];

const principles = [
  'Strategy before tactics—always',
  'Clarity beats cleverness',
  'Design is how it works',
  'Report what matters',
];

// Animation variants to ensure mount animation without relying on scroll
const valuesContainer = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const valuesItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Simple counter that animates from 0 to the target number when in view
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [display, setDisplay] = useState(0);

  // Parse numeric part and suffix like '+'
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1000; // ms

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const current = Math.floor(progress * target);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function AboutClient() {
  return (
    <div className="relative pb-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>
      {/* Hero */}
      <section className="relative pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            About
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Elevare</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We blend creativity, strategy, and technology to help brands rise above the noise and connect meaningfully with their audience.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={valuesContainer}
          initial="hidden"
          animate="show"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={valuesItem}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10"
            >
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-gray-300">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story / Split */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="h-[380px] w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-400">Team at work</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-500 rounded-full opacity-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-white">We are growth partners</h2>
            <p className="mt-4 text-gray-300">
              We believe marketing should be accountable. Every strategic move ladders up to outcomes—awareness, engagement, pipeline, and revenue.
              We pair data with storytelling to create brand experiences that perform.
            </p>
            <ul className="mt-6 space-y-3">
              {['Research, not guesswork', 'Design that drives decisions', 'Build for performance and SEO', 'Iterate fast, learn faster'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckBadgeIcon className="mt-0.5 h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-xl border border-white/10 p-6 text-center bg-white/5 backdrop-blur-sm shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <Counter value={s.value} />
              </div>
              <div className="mt-1 text-gray-300 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Our principles</h3>
              <p className="mt-3 text-blue-100 max-w-xl">
                We operate with focus and rigor, bringing senior talent to every engagement and reporting what truly matters.
              </p>
            </div>
            <ul className="space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-white" />
                  <span className="text-white/95">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white shadow-lg"
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
            Work with us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
