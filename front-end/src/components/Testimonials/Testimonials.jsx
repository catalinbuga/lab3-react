import React from "react";
import "./Testimonial.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets"; 
import Testimonial from "./Testimonial"; 

const Testimonials = () => {
  const testimonialsData = [
    {
      imgSrc: testimonial1,
      name: "Antonino Pietrino",
      company: "Google",
      review: "This is a great course. I got to learn a lot."
    },
    {
      imgSrc: testimonial2,
      name: "Victor Victoraș",
      company: "Instagram",
      review: "I got to learn a lot about Music Production with this course. Thanks :)"
    },
    {
      imgSrc: testimonial3,
      name: "Ana Mihail",
      company: "Samsung",
      review: "Awesome! Great job!!"
    }
  ];

  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;