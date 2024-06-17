// app/users/UserTable.tsx
import React from 'react'

const UserTable = async () => {
    interface dataa{
        id: number;
        name: string;
      }
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{cache:'no-store'});
      const data: dataa[]= await res.json();
  return (
    <ul>{data.map(d=><li key={d.id}>{d.name}</li>)}</ul>
  )
}

export default UserTable