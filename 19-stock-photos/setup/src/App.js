import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import dotenv from "dotenv";
dotenv.config();
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImage = async () => {
    let url;
    url = `${mainUrl}${clientID}`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("helliii");
  };
  return (
    <main>
      <section className='search'>
        <form action='' className='search-form'>
          <input type='text' className='form-input' placeholder='search...' />
          <button type='submit' className='submit-btn' onClick={handlesubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image) => {
            return <Photo key={image.id} {...image} />;
          })}
        </div>
        {loading && <h2 className='loading'> LOADING</h2>}
      </section>
    </main>
  );
}

export default App;
