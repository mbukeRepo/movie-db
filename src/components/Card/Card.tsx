import React from 'react'
import {SimpleMovie as Movie} from "../../Interfaces/Movie";
import {Link} from "react-router-dom";
import "./Card.scss";
 function Card({movie}: {movie: Movie}) {
  return (
    <Link to={"/movies/" + movie.id} className="movie">
        <div className="movie-image">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""/>
        </div>
        <p className="movie-title">{movie.title}</p>
    </Link>
  )
}
export default Card;
