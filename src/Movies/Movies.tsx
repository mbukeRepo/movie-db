import React, {useEffect, useState} from 'react';
import axios from "axios";
import {SimpleMovie as Movie} from "../Interfaces/Movie"
import List from "../components/List/List"





const Movies = () => {
  const [popular, setPopular] = useState<Movie[]>([]);
  // const [topRated, setTopRated] = useState<Movie[]>();
  useEffect(() => {
    document.title = "Movies";
    let subscribed = true;
    fetchPopular().then((movies: Movie[]) => {
      if(subscribed){
        setPopular(prev => movies);
      }
    }).catch((err: Error) => console.log);
    return () => {
      subscribed = false;
    }
  }, []);
  const fetchPopular = async () => {
    try {
      const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=67a92d3ba7cc55df830b73762d5501f0"
      const {data} = await axios.get(popularURL);
      console.log(data);
      const movies = data.results.map(({id, title, backdrop_path}: Movie) => ({title, id, backdrop_path}));
      return movies;  
    } catch (error) {
      throw error;
    }
    
  }
  return (
    <div>
      <div className="popular-list">
        <p className="popular-list__title">Popular movies</p>
        <List movies={popular}/>
      </div>
    </div>
  )
}
export default Movies;