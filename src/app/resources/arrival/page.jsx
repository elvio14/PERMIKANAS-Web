function Article() {
    return (
      <div className="article-container">
        {/* Header Section */}
        <header>
          <a href="/articles">← Back to All Articles</a>
          <h1>How to Start Your Application: Applying to Undergrad and Masters in Canada</h1>
          <p>22nd July 2024 • 6 minute read</p>
        </header>
  
        {/* Header Image */}
        <img
          src="Header_University.jpg"
          alt="University campus in Canada"
          className="featured-image"
        />
  
        {/* Table of Contents */}
        <section className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#section1">Lorem Ipsum</a></li>
            <li><a href="#section2">Lorem Ipsum</a></li>
            <li><a href="#section3">Lorem Ipsum</a></li>
          </ul>
        </section>
  
        {/* Main Content */}
        <article>
          <h2 id="section1">Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  
          <h2 id="section2">Timeline & Deadlines</h2>
          <div className="timeline">
            <img src="your-placeholder-image-url" alt="Timeline" />
          </div>
  
          <h2 id="section3">Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </article>
  
        {/* Sticky Sidebar */}
        <aside className="sidebar">
          <div className="join-community">
            <h3>Join our community to keep up to date on our latest resources</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <button>Join Now</button>
          </div>
  
          <div className="other-articles">
            <h3>Other Articles</h3>
            <ul>
              <li>
                <a href="#">Applying for Study VISA</a>
                <p>Lorem ipsum dolor amet...</p>
              </li>
              <li>
                <a href="#">Documents to Bring</a>
                <p>Lorem ipsum dolor amet...</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  };