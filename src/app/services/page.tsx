import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services | Elevare',
  description: 'Full-service marketing solutions: brand strategy, digital marketing, content, design, web development, advertising, analytics, PR, and automation.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
