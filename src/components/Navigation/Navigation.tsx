import React from 'react';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import {Link} from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className='main-navigation'>
        <p className='main-navigation-logo'>MovieDB</p>
        <ul className="main-navigation-list">
            <li className="main-navigation-list-item"> 
              <Link to={"/movies"}> 
                <VideocamTwoToneIcon/> <span> Movies</span> 
              </Link>
            </li>
            <li className="main-navigation-list-item"> 
              <Link to={"/tv-shows"}>
                <LiveTvTwoToneIcon/> <span> Tv Shows</span>  
              </Link>
            </li>
            <li className="main-navigation-list-item"> 
              <Link to={"/search"}>
                  <SearchTwoToneIcon/> <span> Search</span>
              </Link>
            </li>
        </ul>
    </div>
  )
}
