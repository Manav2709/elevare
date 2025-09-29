import dynamic from 'next/dynamic';

// Import components with SSR disabled where needed
const Hero = dynamic(() => import('./components/home/Hero'), { ssr: true });
const Services = dynamic(() => import('./components/home/Services'), { ssr: true });
const About = dynamic(() => import('./components/home/About'), { ssr: true });
const Portfolio = dynamic(() => import('./components/home/Portfolio'), { ssr: true });
const Testimonials = dynamic(() => import('./components/home/Testimonials'), { ssr: true });
const CTA = dynamic(() => import('./components/home/CTA'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
