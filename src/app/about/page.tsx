import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Elevare',
  description: "Elevare blends creativity, strategy, and technology to deliver measurable growth for ambitious brands.",
};

export default function AboutPage() {
  return <AboutClient />;
}
