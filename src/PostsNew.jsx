export function PostsNew() {
  return (
    <div>
      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            Title: <input type="text"></input>
          </div>
          <div>
            Body: <input type="text"></input>
          </div>
          <div>
            Image: <input type="string" name="image"></input>
          </div>
        </form>
      </div>
    </div>
  );
}