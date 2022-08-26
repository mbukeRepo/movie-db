import React, { useEffect, useState } from 'react';
import {CompoundMovie as Movie} from "../Interfaces/Movie"
import {useParams} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import './Movie.scss';

export default function MovieComponent() {
  const params = useParams<{id: string}>();
  const [movie, setMovie] = useState<Movie>();
  const [readAll, setReadAll] = useState(false);
  useEffect(() => {
    let subscribed = true;
    if (params){
        const movieURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=67a92d3ba7cc55df830b73762d5501f0`;
        fetchMovie(movieURL)
        .then((movie: Movie) => {
            if(subscribed){
                setMovie(prev => movie);
            }
        })
        .catch((error: Error) => console.log);
    }
    return () => {
        subscribed = false;
    }
    
  }, [params]);
  const fetchMovie = async (url: string) => {
      try {
          const {data} = await axios.get(url);
          return data;
      } catch (error) {
          console.log(error);
      }
  }
  const showRest: React.MouseEventHandler<HTMLSpanElement> = () => {
     setReadAll(true);
  }
  return !movie ? 
        (<Loading/>):
        (
          <div className='movie-details'>
            <div className="mobile">
                <p className="movie-details-title">{movie.title}</p>
                <p className="movie-details-release-date">{movie.release_date.split("-")[0]}</p>
            </div>
            <div className="movie-details-poster">
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}  alt="" />
            </div>

            <div className="movie-details-description">
                <div className="movie-details-description-genres">
                    {movie.genres.map((genre: {name: string}) => (<p>{genre.name}</p>))}
                </div>
                <p className="movie-details-description-overview">
                    <span>{movie.overview.slice(0, 130)}</span>
                    <span 
                        className='read-all'
                        style={{display: !readAll ? "inline": "none"}} 
                        onClick={showRest}> ...Read all
                    </span>
                    <span
                        style={{display: readAll ? "inline": "none"}} 
                    >
                            {movie.overview.slice(130)}
                    </span>
                </p>    
            </div>
            <div className="movie-details-videos"></div>
          </div>
        )
        
  
}
