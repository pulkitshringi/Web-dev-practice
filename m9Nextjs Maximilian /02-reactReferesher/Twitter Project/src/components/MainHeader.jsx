// components/MainHeader.jsx

import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader(prop) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
      <Link to='new' className={classes.button}>Add New Post</Link>
      </p>
    </header>
  );
}

export default MainHeader;