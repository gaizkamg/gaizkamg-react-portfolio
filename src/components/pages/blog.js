import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="pages">
      <h2  className='pages'>Blog</h2>
      <div className="links">
        <Link to="/about-me">Read more about myself</Link>
      </div>
    </div>
  );
};

export default Blog;
