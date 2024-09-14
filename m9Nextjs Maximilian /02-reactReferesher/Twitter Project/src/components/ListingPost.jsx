// components/ListingPost.jsx
import { useState,useEffect } from 'react';
import Post from './Post';
import styles from './ListingPost.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

const ListingPost = (prop) => {
useEffect(()=>{
  const fetchPosts = async () => {
    setIsFetching(true); // fetching so true
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  setPosts(data.posts || []);
  setIsFetching(false); // fetching complete so false
  }
  fetchPosts();
},[]);

  const [posts, setPosts] = useState([]);
  // isFetching State 
  const [isFetching, setIsFetching] = useState(false);

  const onAddPost = (post) => {
    setPosts((prevPosts) =>{
      return [post, ...prevPosts];
    })
  }



  return (
    <>
    {prop.showModal && <Modal onHide={prop.onHideProp}>
    <NewPost 
    onCancel={prop.onHideProp} onAddPost={onAddPost}
    />
    </Modal>}
  {!isFetching && posts.length === 0 && <p style={{textAlign:"center"}}>No posts yet. Would you like to add one?</p>}

  {posts.length > 0 && <ul className={styles.posts}>
      {posts.map((post) =>{
        return <Post key={post.id} author={post.author} content={post.body} />
      })}
    </ul> 
    }
    {(isFetching && <p style={{textAlign:"center"}}>Loading...</p>)}
    </>
  )
}

export default ListingPost