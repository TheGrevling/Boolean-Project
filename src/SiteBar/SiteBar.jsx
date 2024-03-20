import React from 'react'
import './SiteBar.css'
import { Link } from 'react-router-dom'

function SiteBar() {
  return (
    <div className='site-bar'>
        <Link to={'/boardgame'} className='site-link'>
          <button className='site-bar button'>BOARD GAMES</button>
        </Link>
        <Link to={'/cardgame'} className='site-link'>
          <button className='site-bar button'>CARD GAMES</button>
        </Link>
        <Link to={'/roleplay'} className='site-link'>
          <button className='site-bar button'>ROLEPLAY GAMES</button>
        </Link>
        <Link to={'/puzzlegame'} className='site-link'>
          <button className='site-bar button'>PUZZLE GAMES</button>
        </Link>
    </div>
  )
}

export default SiteBar