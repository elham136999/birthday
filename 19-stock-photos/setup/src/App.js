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
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImage = async () => {
    let url;
    const urlpage = `&page=${page}`;
    const urlquery = `&query=${query}`;
    url = `${mainUrl}${clientID}${urlpage}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlpage}${urlquery}`;
    } else {
      url = `${mainUrl}${clientID}${urlpage}`;
    }
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldphotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldphotos, data.results];
        } else {
          return [...oldphotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImage();
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldpage) => {
          return oldpage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImage();
  };
  return (
    <main>
      <section className='search'>
        <form action='' className='search-form'>
          <input
            type='text'
            className='form-input'
            placeholder='search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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
        {loading && <h2 className='loading'> LOADING...</h2>}
      </section>
    </main>
  );
}

export default App;
