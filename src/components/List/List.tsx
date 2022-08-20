import React from 'react';
import Card from "../Card/Card";
import {SimpleMovie as Movie} from "../../Interfaces/Movie";
import "./List.scss"

function List({movies}: {movies: Movie[]}) {
  return (
    <div className='movie-list'>
        {
            movies.map((movie: Movie) => (
                <Card movie={movie} key={movie.id}/>
            ))
        }
    </div>
  )
}

export default  List;
