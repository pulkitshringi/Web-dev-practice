// src/routes/NewPost.jsx
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import {Link ,Form , redirect} from 'react-router-dom';

function NewPost(props) {
  
  return (
    <Modal>

    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name="author" id="name" required />
      </p>
      <div className={classes.actions}>
      <Link to='/' className={classes.button}>Cancel</Link>
      <button type="submit">Submit</button>
      </div>

    </Form>

    </Modal>
  );
}

export default NewPost;

const action = async ({request}) => {

  const formData = await request.formData();
  const bodyContent = formData.get('body');
  const author = formData.get('author');

  const response =  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: bodyContent ,author: author})
  });
  return redirect('/');
}
export {action};