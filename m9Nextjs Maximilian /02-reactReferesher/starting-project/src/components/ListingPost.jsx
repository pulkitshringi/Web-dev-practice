// components/ListingPost.jsx
import Post from './Post';
import styles from './ListingPost.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
const ListingPost = () => {

    const [bodyContent, setBodyContent] = useState('');
    const [author, setAuthor] = useState('');
    const onChangeHandler = (event) => {
       setBodyContent(event.target.value);
    };
    const onAuthorChangeHandler = (event) => {
        setAuthor(event.target.value);
    };
  return (
    <>
    <NewPost onChangeHandler={onChangeHandler} onAuthorChangeHandler={onAuthorChangeHandler}/>
    <ul className={styles.posts}>
    <Post author={author} content={bodyContent}/>
    <Post author="mitu" content="good timepass"/>
    <Post author="sophy" content="good food"/>
    <Post author="daddy" content="good sleep"/>
    </ul>
    </>
  )
}

export default ListingPost