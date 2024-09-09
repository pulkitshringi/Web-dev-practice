// components/Post.jsx
import classes from './Post.module.css';
function Post(props){
    console.log(classes);
    return (
        <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.content}</p>
        </li>
    )
}
export default Post;