import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
export const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT);

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movie/:id'>
        <Movie />
      </Route>
    </Switch>
  );
}

export default App;
