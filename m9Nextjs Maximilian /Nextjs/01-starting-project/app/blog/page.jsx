// app/blog/page.jsx
import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <main>
    <div>Blog page</div>
    <p>
    <Link href="/blog/post-1">Blog 1</Link> &nbsp;
    <Link href="/blog/post-2">Blog 2</Link>
    </p>
    </main>
  )
}

export default Blog