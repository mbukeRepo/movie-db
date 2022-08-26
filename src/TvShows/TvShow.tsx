import React, { useEffect, useState } from 'react';
import {CompoundShow as Show} from "../Interfaces/Show"
import {useParams} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import './TvShow.scss';

export default function TvShowComponent() {
  const params = useParams<{id: string}>();
  const [show, setShow] = useState<Show>();
  const [readAll, setReadAll] = useState(false);
  useEffect(() => {
    let subscribed = true;
    if (params){
        const showURL = `https://api.themoviedb.org/3/tv/${params.id}?api_key=67a92d3ba7cc55df830b73762d5501f0`;
        fetchShow(showURL)
        .then((show: Show) => {
            if(subscribed){
                setShow(prev => show);
            }
        })
        .catch((error: Error) => console.log);
    }
    return () => {
        subscribed = false;
    }
    
  }, [params]);
  const fetchShow = async (url: string) => {
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
  return !show ? 
        (<Loading/>):
        (
          <div className='show-details'>
            <div className="mobile">
                <p className="show-details-title">{show.name}</p>
                <p className="show-details-released">
                  {show.first_air_date.split("-")[0]} | {show.number_of_seasons} {show.number_of_seasons === 1 ? "season" : "seasons" }
                </p>
            </div>
            <div className="show-details-poster">
                <img src={"https://image.tmdb.org/t/p/w500" + show.poster_path}  alt="" />
            </div>
            

            <div className="show-details-description">
                <div className="desktop">
                    <p className="show-details-title">{show.name}</p>
                    <p className="show-details-released">
                        {show.first_air_date.split("-")[0]} | {show.number_of_seasons} {show.number_of_seasons === 1 ? "season" : "seasons" }
                    </p>
                </div>
                <div className="show-details-description-genres">
                    {show.genres.map((genre: {name: string}) => genre.name).join(" / ")}
                </div>
                <p className="show-details-description-overview">
                    <span>{show.overview.slice(0, 130)}</span>
                    <span 
                        className='read-all'
                        style={{display: !readAll ? "inline": "none"}} 
                        onClick={showRest}> ...Read all
                    </span>
                    <span
                        style={{display: readAll ? "inline": "none"}} 
                    >
                            {show.overview.slice(130)}
                    </span>
                </p>    
            </div>
            <div className="show-details-videos"></div>
          </div>
        )
        
  
}
