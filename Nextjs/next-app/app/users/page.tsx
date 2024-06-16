// app/users/page.tsx
import React from 'react'

const page = async () => {
  interface dataa{
    id: number;
    name: string;
  }
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{cache:'no-store'});
  const data: dataa[]= await res.json();
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <div>Users page</div>
    <ul>{data.map(d=><li key={d.id}>{d.name}</li>)}</ul>
    </>
  )
}

export default page