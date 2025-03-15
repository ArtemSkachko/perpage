import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior IT Project Manager & Digital Transformation Expert',
  description: 'Artem Skachko - Senior IT Project Manager with 8+ years of experience in digital project delivery. Expertise in web development, Agile methodologies, and team leadership. Proven track record in optimizing project processes and delivering complex digital solutions.',
  keywords: [
    'IT Project Manager',
    'Digital Project Management',
    'Technical Project Lead',
    'Agile Project Management',
    'Digital Transformation',
    'Team Leadership',
    'Process Optimization',
    'Web Development Management',
    'Project Delivery Expert',
    'IT Leadership'
  ],
  openGraph: {
    title: 'Artem Skachko - Senior IT Project Manager & Digital Expert',
    description: 'Expert IT Project Manager specializing in digital transformation and team leadership. Discover how I can help optimize your project delivery and team performance.',
    images: [
      {
        url: '/portraits/face-0.jpg',
        width: 800,
        height: 800,
        alt: 'Artem Skachko - IT Project Manager',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/as_logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: [{ url: '/as_logo.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/as_logo.svg', type: 'image/svg+xml' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/as_logo.svg',
      },
    ],
  },
}; 