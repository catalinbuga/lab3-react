import React from "react";

const BlogPost = ({ imgSrc, tag, title, link }) => {
  return (
    <div className="post">
      <div className="tag">{tag}</div>
      <a href={link}>
        <img src={imgSrc} alt={title} />
      </a>
      <a href={link}>
        <h3 className="post-title">{title}</h3>
      </a>
    </div>
  );
};

export default BlogPost;
