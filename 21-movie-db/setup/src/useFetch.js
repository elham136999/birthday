import React, { useState, useEffect } from "react";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlparams) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchmovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmovies(`${API_ENDPOINT}${urlparams}`);
  }, [urlparams]);
  return { isLoading, error, data };
}

export default useFetch;
