import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import { siteConfig } from '@/config/site';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL('https://snamoor.biznezgrowth.co/'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  twitter: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    card: 'summary_large_image',
    creator: '@iamadetoye',
    creatorId: '1238454587507576832',
    description: siteConfig.description,
    images: ['https://images.test.biznezgrowth.co/aamustapha/snamoor-twitter.jpg', 'https://images.test.biznezgrowth.co/web-dev-2.jpg', 'https://images.test.biznezgrowth.co/web-dev.jpg', 'https://images.test.biznezgrowth.co/01.jpg', 'https://images.test.biznezgrowth.co/02.jpeg', 'https://images.test.biznezgrowth.co/03.png'],
  },

  icons: [
    {
      url: '/images/snamoor.jpg',
      href: '/images/snamoor.jpg',
    },
  ],
};

const Poppins = localFont({
  variable: '--font-poppins',
  src: [
    {
      path: '../public/fonts/Poppins/Poppins-Black.woff2',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../public/fonts/Poppins/Poppins-ExtraBold.woff2',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../public/fonts/Poppins/Poppins-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../public/fonts/Poppins/Poppins-ExtraLight.woff2',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Thin.woff2',
      style: 'normal',
      weight: '100',
    },
  ],
});
const NotoSans = localFont({
  variable: '--font-notosans',
  src: [
    {
      path: '../public/fonts/NotoSans/NotoSans-Black.woff2',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-ExtraBold.woff2',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-ExtraLight.woff2',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Thin.woff2',
      style: 'normal',
      weight: '100',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${NotoSans.variable} ${Poppins.variable}`}>
      <body>
        <Navbar />
        <main className="relative overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
