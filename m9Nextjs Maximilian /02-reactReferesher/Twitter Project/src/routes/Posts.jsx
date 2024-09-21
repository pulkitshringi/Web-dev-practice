// src/routes/posts.jsx
import ListingPost from "../components/ListingPost";
import {Outlet} from 'react-router-dom';
function Posts() {

  return (
    <>
    <Outlet/>
  <main>
  <ListingPost/>
  </main>
  </>);
}

export default Posts;

const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts;
}

export {loader};