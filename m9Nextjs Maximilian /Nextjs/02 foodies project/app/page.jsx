// app/page.js
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      
      <p><Link  href='/meals'>Meals</Link> &nbsp;    </p>
      <p><Link href='/meals/share'>Share the meal</Link> &nbsp;</p>
      <p><Link href='/community'>Community</Link> &nbsp;</p>
  
    </main>
  );
}
