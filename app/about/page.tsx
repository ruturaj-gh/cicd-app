import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>About This App</h1>
      <p>This app demonstrates a simple Next.js setup with two pages.</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
