// app/blog/[slug]/page.jsx
import React from 'react'

const blogPost = ({params}) => {
  return (
    <>
    <main>Blog post No : {params.slug}</main>
    </>
  )
}

export default blogPost


