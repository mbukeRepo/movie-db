import React from 'react';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className='main-navigation'>
        <p className='main-navigation-logo'>MovieDB</p>
        <ul className="main-navigation-list">
            <li className="main-navigation__list-item"> <VideocamTwoToneIcon/> <span> Movies</span> </li>
            <li className="main-navigation__list-item"> <LiveTvTwoToneIcon/> <span> Tv Shows</span></li>
            <li className="main-navigation__list-item"> <SearchTwoToneIcon/> <span> Search</span> </li>
        </ul>
    </div>
  )
}
