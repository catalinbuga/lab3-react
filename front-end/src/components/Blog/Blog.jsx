import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import BlogPost from "./BlogPost"; 

const blogPostsData = [
  {
    imgSrc: blog1,
    tag: "DAW",
    title: "How to use Drum Machine in Logic Pro X",
    link: "#"
  },
  {
    imgSrc: blog2,
    tag: "Mixing",
    title: "How To Mix Guitars Effectively",
    link: "#"
  },
  {
    imgSrc: blog3,
    tag: "Vox",
    title: "The Real Power of Harmonies in Music Production",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          {blogPostsData.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
