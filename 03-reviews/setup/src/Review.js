import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  const checknumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevperson = () => {
    setindex((index) => {
      let newperson = index - 1;
      return checknumber(newperson);
    });
  };
  const nextperson = () => {
    setindex((index) => {
      let newperson = index + 1;
      return checknumber(newperson);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setindex(checknumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
      </div>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='container-button'>
        <button className='prev-btn' onClick={prevperson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextperson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
