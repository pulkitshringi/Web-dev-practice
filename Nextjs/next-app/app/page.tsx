// app/page.tsx
import Link from 'next/link';
import Button from './components/Button';
export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Button />
      <Link href="/users">Users (Link)</Link>
    </main>
  )
}
