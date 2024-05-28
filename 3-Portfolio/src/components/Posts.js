import './Posts.css'

function Posts() {
  return (
    <section className="posts">
      <div className="posts-line"></div>

      <h2 className="post-title">Title</h2>

      <section className="post-item">
        <div className="post-image"></div>
        <div className="post-info">
          <h3>Title</h3>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className="post-button">Button Primary Light</button>
        </div>
      </section>

      <section className="post-item">
        <div className="post-image"></div>
        <div className="post-info">
          <h3>Title</h3>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className="post-button">Button Primary Light</button>
        </div>
      </section>
    </section>
  );
}

export default Posts;