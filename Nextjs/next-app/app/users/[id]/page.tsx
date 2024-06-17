// app/users/[id]/page.tsx
import Notfound from '@/app/not-found'
import React from 'react'
import Notfoundid from './not-found'

interface url{
    params:{id:number}
}

const id = ({params:{id}}:url) => {
    if(id>10) return Notfoundid()
  return (
    <div>UxserDetailPage {id}</div>
  )
}

export default id