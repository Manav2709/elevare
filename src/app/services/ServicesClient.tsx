'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowRightIcon, ChartBarIcon, MegaphoneIcon, LightBulbIcon, CodeBracketIcon, CursorArrowRippleIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';

const services = [
  { id: 'brand-strategy', title: 'Brand Strategy & Identity', desc: 'Naming, logo systems, and positioning that differentiate and endure.', icon: LightBulbIcon },
  { id: 'digital-marketing', title: 'Digital Marketing', desc: 'SEO, SEM, social, and PPC engineered for efficient, measurable growth.', icon: MegaphoneIcon },
  { id: 'content-marketing', title: 'Content Marketing', desc: 'Copy, blogs, video and narrative frameworks that resonate and convert.', icon: EnvelopeOpenIcon },
  { id: 'creative-design', title: 'Creative & Design', desc: 'Graphic design, brand systems, and UI/UX that transform attention into action.', icon: CursorArrowRippleIcon },
  { id: 'web-development', title: 'Web Development', desc: 'High‑performance websites, landing pages, and e‑commerce built for SEO.', icon: CodeBracketIcon },
  { id: 'analytics', title: 'Analytics & Performance', desc: 'Dashboards, attribution, and experimentation to optimize every dollar.', icon: ChartBarIcon },
];

const processSteps = [
  { step: '01', title: 'Discovery & Insight', text: 'We align on goals, audience, and KPIs. We audit your current brand, funnel, and channels.' },
  { step: '02', title: 'Strategy & Architecture', text: 'A focused plan across brand, content, and channels with clear success metrics.' },
  { step: '03', title: 'Creative & Build', text: 'Messaging, design systems, and web experiences brought to life.' },
  { step: '04', title: 'Launch & Scale', text: 'Go‑to‑market activation with agile optimization and transparent reporting.' },
];

const faqs = [
  { q: 'How do you measure success?', a: 'We set KPIs tied to your goals and report weekly. Expect dashboards with traffic, CAC/LTV, pipeline, and revenue attribution.' },
  { q: 'What is the typical engagement length?', a: 'Strategy sprints run 3–6 weeks. Full‑funnel engagements typically span 3–12 months with clear milestones.' },
  { q: 'Do you work with in‑house teams?', a: 'Yes. We love partnering with internal teams and can augment gaps across strategy, creative, dev, and media.' },
];

export default function ServicesClient() {
  return (
    <div className="relative pb-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>
      {/* Hero */}
      <section className="relative pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Services that Elevate
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand, Demand, and Revenue
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto"
            >
              We blend data‑driven strategy with creative excellence to deliver growth you can measure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10"
            >
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white">{s.title}</h2>
                  <p className="mt-2 text-gray-300">{s.desc}</p>
                  <div className="mt-6">
                    <a href={`/services#${s.id}`} className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
                      Learn more
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Process timeline */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">How We Work</h3>
          <p className="mt-3 text-gray-300">A pragmatic, end‑to‑end approach designed for impact.</p>
        </div>
        <div className="mt-12 relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/10 to-white/10" />
          <div className="space-y-10">
            {processSteps.map((stp, idx) => (
              <motion.div
                key={stp.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="relative md:grid md:grid-cols-2 md:gap-10 items-start"
              >
                {/* Timeline dot */}
                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border border-white/20 top-6" />

                {/* Left column (odd steps) */}
                <div className={`${idx % 2 === 0 ? 'md:pr-12 md:order-1' : 'md:order-2'}`}>
                  {idx % 2 === 0 && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/10 text-blue-400">
                          <span className="text-sm font-semibold">{stp.step}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white">{stp.title}</h4>
                      </div>
                      <p className="mt-3 text-gray-300">{stp.text}</p>
                    </div>
                  )}
                </div>

                {/* Right column (even steps) */}
                <div className={`${idx % 2 === 1 ? 'md:pl-12 md:order-2' : 'md:order-1'}`}>
                  {idx % 2 === 1 && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/10 text-blue-400">
                          <span className="text-sm font-semibold">{stp.step}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white">{stp.title}</h4>
                      </div>
                      <p className="mt-3 text-gray-300">{stp.text}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">What you can expect</h3>
            <ul className="mt-6 space-y-4">
              {['Senior talent on every project','Transparent reporting & dashboards','Clear roadmaps and proactive communication','Design and build quality that stands out'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">FAQs</h3>
            <div className="mt-6 space-y-5">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-white/10 p-5 bg-white/5">
                  <p className="font-medium text-white">{f.q}</p>
                  <p className="mt-1 text-gray-300">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
            </div>
            <div className="relative p-8 sm:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to elevate your growth?</h3>
              <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Let’s design a plan tailored to your goals and timeline.</p>
              <div className="mt-6">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-blue-700 bg-white hover:bg-gray-100 shadow-lg">
                  Start a conversation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
