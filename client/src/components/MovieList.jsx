import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const MovieList = () => {
    const [data, setData] = useState([]);
    const getAPIData = async ()=>{
     const url = "https://hoblist.com/api/movieList";
     let result = await fetch(url);
     result = await result.json();
     setData(result)
    }
    useEffect(()=>{
     getAPIData();
    })

  return (
    <div>
      <h2>Kannada Movies List</h2>
      <ul>
        {data.length> 0 ? movies.map(movie => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Votes: {movie.voting}</p>
          </li>
        )): <h1>No Result Found</h1>
        }
      </ul>
    </div>
  );
};

export default MovieList;