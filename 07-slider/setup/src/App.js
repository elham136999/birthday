import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [pepoles, setPepole] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        {pepoles.map((pepole, pepoleIndex) => {
          const { id, image, name, quote, title } = pepole;
          let position = "nextSlide";
          if (pepoleIndex === index) {
            position = "activeSlide";
          }
          if (
            pepoleIndex === index - 1 ||
            (index === 0 && pepoleIndex === pepole.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev'>
          <FiChevronLeft onClick={() => setIndex(index - 1)} />
        </button>
        <button className='next'>
          <FiChevronRight onClick={() => setIndex(index + 1)} />
        </button>
      </div>
    </section>
  );
}

export default App;
