import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Artem Skachko - Senior IT Project Manager',
    template: '%s | Artem Skachko'
  },
  description: 'Senior IT Project Manager with 8+ years of experience in digital project delivery. Expert in web development, design, and team leadership. Specializing in complex project launches and process optimization.',
  keywords: [
    'Project Manager',
    'IT Project Manager',
    'Technical Project Manager',
    'Digital Project Manager',
    'Team Leadership',
    'Agile',
    'Scrum',
    'Web Development',
    'Process Optimization',
    'Digital Transformation'
  ],
  creator: 'Artem Skachko',
  authors: [{ name: 'Artem Skachko' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skachko.art/',
    title: 'Artem Skachko - Senior IT Project Manager',
    description: 'Senior IT Project Manager with 8+ years of experience in digital project delivery. Expert in web development, design, and team leadership.',
    siteName: 'Artem Skachko Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artem Skachko - Senior IT Project Manager',
    description: 'Senior IT Project Manager with 8+ years of experience in digital project delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <ThemeProvider>
          <Header />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
