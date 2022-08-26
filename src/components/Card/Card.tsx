import React from 'react'
import {SimpleMovie as Movie} from "../../Interfaces/Movie";
// import {SimpleShow as Show} from "../../Interfaces/Show";
import {Link} from "react-router-dom";
import TheatersIcon from '@mui/icons-material/Theaters';
import "./Card.scss";
 function Card({item}: {item: Movie | any}) {
  
  return (
    <Link to={"/movies/" + item.id }  className="movie">
        <div className="movie-image">
           {
             item.backdrop_path ? 
              (<img src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt=""/>): 
                  <TheatersIcon className="movie-image-backup"/>
           }
            
        </div>
        <p className="movie-title">{item.title || item.name}</p>
    </Link>
  )
}
export default Card;
