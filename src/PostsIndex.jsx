 
  export function PostsIndex(props) {
      return (
        <div>
          <div id="posts-index">
          <h1>All posts</h1>
        {props.posts.map((post) => (
           <div key={post.id} className="posts">
             <h2>{post.title}</h2>
             <img src={post.image} />
             <p>body: {post.body}</p>
             <button onClick={() => props.onShowPost(post)}>Edit Post</button>
           </div>
           
         ))}
        </div>
        </div>
      );
    }