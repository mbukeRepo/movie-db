import React, {useEffect, useState} from 'react';
import axios from "axios";
import {SimpleMovie as Movie} from "../Interfaces/Movie"
import List from "../components/List/List"





const Movies = () => {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  // const [topRated, setTopRated] = useState<Movie[]>();
  useEffect(() => {
    document.title = "Movies";
    const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=67a92d3ba7cc55df830b73762d5501f0";
    const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=67a92d3ba7cc55df830b73762d5501f0";
    let subscribed = true;

    // fetching popular movies
    fetchMovies(popularURL).then((movies: Movie[]) => {
      if(subscribed){
        setPopular(prev => movies);
      }
    }).catch((err: Error) => console.log);

    // fetching top rated
    fetchMovies(topRatedURL).then((movies: Movie[]) => {
      if(subscribed){
        setTopRated(prev => movies);
      }
    }).catch((err: Error) => console.log);

    return () => {
      subscribed = false;
    }
  }, []);
  const fetchMovies = async (url: string) => {
    try {
      const {data} = await axios.get(url);
      console.log(data);
      const movies = data.results.map(({id, title, backdrop_path}: Movie) => ({title, id, backdrop_path}));
      return movies;  
    } catch (error) {
      throw error;
    }
    
  }
  return (
    <div>
      {
        (!popular && !topRated) ? 
          <p>Loading</p>: 
          <>
             <div className="list">
                <p className="list__title">Popular movies</p>
                <List items={popular}/>
             </div>
             <div className="list">
                <p className="list__title">Top Rated movies</p>
                <List items={topRated}/>
             </div>
          </>
      }
      
    </div>
  )
}
export default Movies;