import {FC, useState, useEffect } from "react";

import { Testimonial, testimonials } from "./testimonials";
import "./App.css";


const App: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial: Testimonial = testimonials[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="testimonial-container">
      <div className="progress-bar"></div>
      <i className="fas fa-quote-right fa-quote"></i>
      <i className="fas fa-quote-left fa-quote"></i>
      <p className="testimonial">{currentTestimonial.text}</p>
      <div className="user">
        <img
          src={currentTestimonial.photo}
          alt="user"
          className="user-image"
        />
        <div className="user-details">
          <h4 className="username">{currentTestimonial.name}</h4>
          <p className="role">{currentTestimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
