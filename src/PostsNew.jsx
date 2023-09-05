import axios from "axios"
export function PostsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params)
    event.target.reset()

    
  }

  return (
    <div>
      <div id="posts-new">
        <h1>New post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input type="text" name="title"></input>
          </div>
          <div>
            Body: <input type="text" name ="body"></input>
          </div>
          <div>
            Image: <input type ="text" name="image"></input>
          </div>
          <button type ="submit">Create post</button>
          
        </form>
      </div>
    </div>
  );
}