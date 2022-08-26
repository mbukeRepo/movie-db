import React, {useEffect, useState} from 'react';
import axios from "axios";
import List from "../components/List/List";
import {SimpleShow as Show} from "../Interfaces/Show";
import Loading from "../components/Loading/Loading";





const Movies = () => {
  const [popular, setPopular] = useState<Show[]>([]);
  const [topRated, setTopRated] = useState<Show[]>([]);
  // const [topRated, setTopRated] = useState<Movie[]>();
  useEffect(() => {
    document.title = "Tv Shows";
    const popularURL = "https://api.themoviedb.org/3/tv/popular?api_key=67a92d3ba7cc55df830b73762d5501f0";
    const topRatedURL = "https://api.themoviedb.org/3/tv/top_rated?api_key=67a92d3ba7cc55df830b73762d5501f0";
    let subscribed = true;

    // fetching popular movies
    fetchShows(popularURL).then((shows: Show[]) => {
      if(subscribed){
        setPopular(prev => shows);
      }
    }).catch((err: Error) => console.log);

    // fetching top rated
    fetchShows(topRatedURL).then((shows: Show[]) => {
      if(subscribed){
        setTopRated(prev => shows);
      }
    }).catch((err: Error) => console.log);

    return () => {
      subscribed = false;
    }
  }, []);
  const fetchShows = async (url: string) => {
    try {
      const {data} = await axios.get(url);
      console.log(data);
      const shows = data.results.map(({id, name, backdrop_path}: Show) => ({name, id, backdrop_path}));
      return shows;  
    } catch (error) {
      throw error;
    }
    
  }
  return (
    <div>
      {
        (!popular || !topRated) ? 
          <Loading/>: 
          <>
             <div className="list">
                <p className="list__title">Popular tv shows</p>
                <List items={popular}/>
             </div>
             <div className="list">
                <p className="list__title">Top Rated tv shows</p>
                <List items={topRated}/>
             </div>
          </>
      }
      
    </div>
  )
}
export default Movies;