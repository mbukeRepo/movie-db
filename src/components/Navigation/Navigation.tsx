import React from 'react';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className='main-navigation'>
        <p className='main-navigation-logo'>MovieDB</p>
        <ul className="main-navigation__list">
            <li className="main-navigation__list-item"> <LocalMoviesTwoToneIcon/> Movies</li>
            <li className="main-navigation__list-item"> <LiveTvTwoToneIcon/> Tv Shows</li>
            <li className="main-navigation__list-item"> <SearchTwoToneIcon/>Search</li>
        </ul>
    </div>
  )
}
