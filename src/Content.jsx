import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal"
import { PostsShow } from "./PostsShow"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

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
    setCurrentPost(post)
    console.log("hello")
  }

  const handleClose = () => {
    setIsPostsShowVisible(false)
  }

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      setPosts([...posts, response.data])
  })}

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map(post => {
          if (post.id === id) {
            return response.data;

          } else {
            return post;
          }
        })
      )
    })
  }

 const handleDestroyPost = (id) => {
 console.log('Destroying')
 axios.delete(`http://localhost:3000/posts/${id}.json`).then(response => {
  console.log(response.data);
  handleClose()
  posts.filter(post => id !== post.id)
 }) 
}

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutLink />}  />
    </Routes>

      
      
      
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost}></PostsShow>
      </Modal>
    </div>
  )
  }