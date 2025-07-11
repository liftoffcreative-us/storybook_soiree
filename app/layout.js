import { Geist, Geist_Mono, Lavishly_Yours } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const a_day_without = localFont({
  src: '/fonts/A Day Without Sun Text Regular.ttf',
  variable: '--font-a_day_without',
});
const alfarn = localFont({
  src: '/fonts/Alfarn Regular.ttf',
  variable: '--font-alfarn',
});
const indivisible = localFont({
  src: '/fonts/Indivisible Regular.ttf',
  variable: '--font-indivisible',
});
const indivisibleBold = localFont({
  src: '/fonts/Indivisible SemiBold.ttf',
  variable: '--font-indivisibleBold',
});
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lavishly = Lavishly_Yours({
  variable: '--font-lavishly',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Storybook Soirees',
  description:
    'Storybook Soirees is an event company specializing in fantasy-themed events, including the "Nashville Night Court Revelry". Marketed towards readers of Romantasy novels, the event aims to create a fantasy environment. Attendees have described it as a "Faerytale" experience. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lavishly.variable} ${a_day_without.variable} ${alfarn.variable} ${indivisible.variable} ${indivisibleBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
