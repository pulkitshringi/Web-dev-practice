// components/NewPost.jsx
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import classes from './NewPost.module.css';

function NewPost(props) {
  
  const [bodyContent, setBodyContent] = useState('');
  const [author, setAuthor] = useState('');
  const onChangeHandler = (event) => {
    setBodyContent(event.target.value);
 };
 const onAuthorChangeHandler = (event) => {
     setAuthor(event.target.value);
 };
 const submitHandler = (event) => {
      event.preventDefault();
      const post = {
        body: bodyContent,    // we could add validations
        author: author,
        id: uuidv4()
      };
      console.log(post);
      props.onAddPost(post);
      props.onCancel();
    }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChangeHandler} />
      </p>
      <div className={classes.actions}>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Submit</button>
      </div>

    </form>
  );
}

export default NewPost;