import React, {useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import "./Search.scss";
import axios from 'axios';

interface Result {
  name?: string;
  title?:string;
  id: number;
  first_air_date?: string;
  release_date?:string;
}

export default function Search() {
  const [active, setActive] = useState("movie");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  useEffect(() => {
    document.title = "Search";
  }, []);
  const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if(e.key === "Enter"){
        if(query){
          const searchURL = `https://api.themoviedb.org/3/search/${active}?api_key=67a92d3ba7cc55df830b73762d5501f0&query=` + query;
          const {data} = await axios.get(searchURL);
          setResults(data.results);
        }
    }
  }
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  }
  return (
    <div className='search-container'>
      <div className="search-box">
        <div className="search-box-input">
          <SearchIcon/>
          <input 
            type="text" 
            placeholder='Type and place Enter' 
            onKeyPress={onKeyPress}
            onChange={onChange}
            
          />
        </div>
        <div className="search-selection">
          <div className="search-selection-option" 
            style={{background: active==="movie" ? "#e50914": "inherit"}}
            onClick={() => setActive("movie")}
            >
            <span>Movie</span>
          </div>
          <div className="search-selection-option"
            style={{background: active==="tv" ? "#e50914": "inherit"}}
            onClick={() => setActive("tv")}
          >
            <span>Tv Show</span>
          </div>
      </div>
    </div>
    {
      results ? 
      (
        <ul className="search-results-list">
          {
            results.map((res: Result) => 
              (<li className='search-results-list-item' key={res.id}>
                  <Link to={active === "movie"? ("/movies/" + res.id) : ("/tv-shows/" + res.id) }>
                    {res.name || res.title} 
                  </Link>
              </li>)
            )
          }
        </ul>
      ):
      (<Loading/>)
    }
    
    </div>
  )
}
