import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to CICD App</h1>
      <p>This is the home page of a simple Next.js app.</p>
      <Link href="/about">Go to About page</Link>
    </main>
  );
}
