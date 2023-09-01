import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal"
import { PostsShow } from "./PostsShow"
import { Signup } from "./Signup"

export function Content() {


  
  
const [posts, setPosts] = useState([]);
  
const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
 
const [currentPost, setCurrentPost] = useState({})

  const handlePostsIndex = () => {
    
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };
  useEffect(handlePostsIndex, []);
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost()
  }

  const handleClose = () => {
    setIsPostsShowVisible(false)
  }


  return (
    <div>
      <h1>Welcome to React!</h1>
      <Signup />
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <PostsShow post={currentPost}></PostsShow>
      </Modal>
    </div>
  )
  }