import axios from "axios"

export function PostsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting')
    props.onUpdatePost(props.post.id, params)
  }
    const handleClick = () => {
      console.log('click')
      props.onDestroyPost(props.post.id)
    
  }
  return (
    <div>
      <button onClick={handleClick}>Destroy Post</button>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.name} />
        </div>
        <div>
          Body: <input type="text" name="body" defaultValue={props.post.body}/>
        </div>
        <div>
          Image: <input type="text" name="image" defaultValue={props.post.image}/>
        </div>
        
        <button type="submit">Edit post</button>
      </form>
    </div>
  );
}