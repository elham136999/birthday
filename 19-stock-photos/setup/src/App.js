import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImage = async () => {
    let url = `${mainUrl}${clientID}`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
      console.log(process.env.REACT_APP_ACCESS_KEY);
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
        <div className='photos-center'></div>
      </section>
    </main>
  );
}

export default App;
