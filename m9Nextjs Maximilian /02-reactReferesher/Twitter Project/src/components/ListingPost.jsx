// components/ListingPost.jsx
import { useState,useEffect } from 'react';
import Post from './Post';
import styles from './ListingPost.module.css';
import NewPost from '../routes/NewPost';
import Modal from './Modal';
import { useLoaderData } from 'react-router-dom';


const ListingPost = (prop) => {

const posts = useLoaderData();

  const onAddPost = (post) => {
    setPosts((prevPosts) =>{
      return [post, ...prevPosts];
    })
  }



  return (
    <>
    {prop.showModal && 
    <Modal onHide={prop.onHideProp}>
    <NewPost  onCancel={prop.onHideProp} onAddPost={onAddPost}/>
    </Modal>}
    
  {posts.length === 0 && <p style={{textAlign:"center"}}>No posts yet. Would you like to add one?</p>}

  {posts.length > 0 && <ul className={styles.posts}>
      {posts.map((post) =>{
        return <Post key={post.id} id={post.id} author={post.author} content={post.body} />
      })}
    </ul> 
    }
    </>
  )
}

export default ListingPost