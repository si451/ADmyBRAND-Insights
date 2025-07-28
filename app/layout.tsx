import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'ADmyBRAND Insights - AI-Powered Analytics',
  description: 'Futuristic analytics dashboard for digital marketing agencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}