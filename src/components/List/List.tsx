import React, { useState, useEffect, useRef } from 'react';
import Card from "../Card/Card";
import {SimpleMovie as Movie} from "../../Interfaces/Movie";
import "./List.scss";
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

function List({movies}: {movies: Movie[]}) {
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const ref = useRef<any| undefined>();
  useEffect(() => {
      
  },[]);
  useEffect(() => {
      console.log();
      console.log(maxScrollPosition, scrollPos);
  });
  
  const scrollLeft: React.MouseEventHandler<HTMLDivElement> = () => {
    if (ref.current){
        ref.current.scrollLeft -= 500;
        setScrollPos(ref.current.scrollLeft);
    }
  }
  const scrollRight: React.MouseEventHandler<HTMLDivElement> = () => {

    if ((ref.current.scrollWidth - ref.current.clientWidth)> maxScrollPosition) {
        setMaxScrollPosition(ref.current.scrollWidth - ref.current.clientWidth) ;
    }
    
    if (ref.current){
        ref.current.scrollLeft += 500;
        setScrollPos(ref.current.scrollLeft);
    }
  }

  return (
    <div className='movie-list'>
        {
            scrollPos > 0 ?
                <div className="movie-list-left-ctl" onClick={scrollLeft}>
                    <ArrowBackIosNewTwoToneIcon/>
                </div>
                : null
        }
        
        <div id="movie_container" ref={ref}>
            {
                movies.map((movie: Movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))
            }
        </div>
        <div className="movie-list-left-ctl" onClick={scrollRight}>
            {
                (scrollPos === 0) || (maxScrollPosition > Math.ceil(scrollPos)) ?
                <ArrowForwardIosTwoToneIcon/>
                : null
            }
            
        </div>
    </div>
  )
}

export default  List;
