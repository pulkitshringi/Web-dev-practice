// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts,{loader as postsLoader} from './routes/Posts'
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import NewPost,{action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import { Root } from 'postcss'
import PostDetails,{loader as postDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  {path:'/' , element: <RootLayout/> , children: [
    {path: '/', 
      element: <Posts/>,
      loader: postsLoader, 
      children: [
        {path: '/new', element: <NewPost/>, action: newPostAction},
        {path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}   // here
      ]},
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
