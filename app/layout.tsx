import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CICD App',
  description: 'A simple Next.js app with two pages',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
