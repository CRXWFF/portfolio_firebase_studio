import type {Metadata} from 'next';
import { Manrope, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Nashirul - Portfolio',
  description: 'Web Developer & Software Engineer. Explore my projects, tech stack, and professional journey.',
  metadataBase: new URL('https://nashirul.vercel.app'),
  keywords: ['Nashirul', 'Portfolio', 'Web Developer', 'Software Engineer', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Nashirul' }],
  creator: 'Nashirul',
  publisher: 'Nashirul',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://nashirul.vercel.app',
    title: 'Nashirul - Portfolio',
    description: 'Web Developer & Software Engineer. Explore my projects, tech stack, and professional journey.',
    siteName: 'Nashirul Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nashirul - Portfolio',
    description: 'Web Developer & Software Engineer. Explore my projects, tech stack, and professional journey.',
    creator: '@nashirul',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${manrope.variable} ${sourceCodePro.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
