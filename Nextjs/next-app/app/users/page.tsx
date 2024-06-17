// app/users/page.tsx
import React, { Suspense } from 'react'
import UserTable from './UserTable';
const page = async () => {
  interface dataa{
    id: number;
    name: string;
  }
  const res = await fetch('wrong link',{cache:'no-store'});
  const data: dataa[]= await res.json();
  return (
    <>
    <div className='ml-3'>
    <p>{new Date().toLocaleTimeString()}</p>
    Users page
    <UserTable />
    </div>
    </>
  )
}

export default page