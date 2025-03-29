import React from "react";

const Testimonial = ({ imgSrc, name, company, review }) => {
  return (
    <div className="testimonial">
      <img src={imgSrc} alt={name} />
      <div className="reviewer-details">
        <div className="name">{name}</div>
        <div className="company-name">{company}</div>
        <div className="review">{review}</div>
      </div>
    </div>
  );
};

export default Testimonial;


