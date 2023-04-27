import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import SearchMovie from "./Components/SearchMovie";
import MovieDetails from "./Components/MovieDetails";
import { listmovie } from "./data";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const [movies, setmovies] = useState(listmovie);
  // add movie
  const handleAdd = (newmovie) => {
    setmovies([{ ...newmovie, id: Math.random() }, ...movies]);
  };
  // search by name
  const [searchByName, setsearchByName] = useState("");
  const handleName = (searchedvalue) => {
    setsearchByName(searchedvalue);
  };

  //search by rate
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/add" element={<AddMovie handleAdd={handleAdd} />} />
        <Route
          path="/"
          element={
            <div>
              <SearchMovie
                rating={rating}
                handleReset={handleReset}
                handleName={handleName}
                handleRating={handleRating}
              />
              <MovieList
                movies={movies.filter(
                  (el) => el.title.includes(searchByName) && el.rating >= rating
                )}
              />
            </div>
          }
        />
        <Route
          path="/details/:idmovie"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
