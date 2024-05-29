import './Posts.css'

function Posts() {
  return (
    <section className="posts">
      <div className="posts-section-line"></div>

      <div className="posts-section-content">
        <h2 className="posts-section-title">Title</h2>

        <p className="posts-section-paragraph">Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>

        <section className="post-item">
          <div className="post-image"></div>
          <div className="post-info">
            <h3 className="post-title">Title</h3>
            <p className="post-paragraph">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button className="post-button">Button Primary Light</button>
          </div>
        </section>

        <section className="post-item">
          <div className="post-image"></div>
          <div className="post-info">
            <h3 className="post-title">Title</h3>
            <p className="post-paragraph">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button className="post-button">Button Primary Light</button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Posts;