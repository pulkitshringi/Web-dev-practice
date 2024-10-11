// app/page.js (home)
import Link from 'next/link';
import Welcome from '@/components/Welcome';
export default function Home() {
  console.log("Hello from the server!");
  return (
    <main>
      <Welcome />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
