// components/ListingPost.jsx
import Post from './Post';
import styles from './ListingPost.module.css';
const ListingPost = () => {
  return (
    <ul className={styles.posts}>
    <Post author="pooki" content="good place"/>
    <Post author="mitu" content="good timepass"/>
    <Post author="sophy" content="good food"/>
    <Post author="daddy" content="good sleep"/>
    </ul>
  )
}

export default ListingPost