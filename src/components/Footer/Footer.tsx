import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'> 
        <p className="footer__title"> 
            <span>Made with</span>
            <FavoriteIcon className='red'/> 
            <span> by Ishimwe Prince</span>
        </p>
    </div>
  )
}
