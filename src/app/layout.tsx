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
  title: 'Nashirul - Web Developer Portfolio',
  description: "Nashirul's personal portfolio website showcasing projects and skills as a web developer.",
  metadataBase: new URL('https://nashirul.vercel.app'),
  openGraph: {
    title: 'Nashirul - Web Developer Portfolio',
    description: "Nashirul's personal portfolio website showcasing projects and skills as a web developer.",
    url: 'https://nashirul.vercel.app',
    siteName: 'Nashirul Portfolio',
    images: [
      {
        url: '/ss_website.png', // Gambar Open Graph
        width: 1200,
        height: 630,
        alt: 'Nashirul Portfolio Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nashirul - Web Developer Portfolio',
    description: "Nashirul's personal portfolio website showcasing projects and skills as a web developer.",
    images: ['/ss_website.png'], // Gambar untuk Twitter Card
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
      <body className={`${manrope.variable} ${sourceCodePro.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
