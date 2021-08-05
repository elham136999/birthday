import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closesubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closesubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone-img' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
