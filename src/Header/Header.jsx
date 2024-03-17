import React from 'react'
import LogoSVG from '../assets/LogoSVG'
import SearchIconSVG from '../assets/SearchIconSVG'
import BasketIconSVG from '../assets/BasketIconSVG'
import './Header.css'
import HeartIconSVG from '../assets/HeartIconSVG'
import ProfileIconSVG from '../assets/ProfileIconSVG'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <LogoSVG primaryColor="var(--light-red)" secondaryColor="var(--off-white)"></LogoSVG>

      <div className='search-input'>
        <input type="text" name="q" id="searchInput" className="search-input-field" placeholder="Search a game..."/>                        
        <button className="search-input-button" type="submit">
          <SearchIconSVG width={'23px'} height={'23px'} primaryColor={'#fff'}/>
          <div className='search-inputbuttontext'>
            Search
          </div>
        </button>
      </div>

      <div className="header-button-list">
        <Link to='/user/wish-list' className='header-button'>
         <HeartIconSVG/>
        </Link>
        <Link to='/user/profile' className='header-button'>
          <ProfileIconSVG/>
          Sign In
        </Link>
        <Link to='/basket' className='header-button'>
         <BasketIconSVG width={'23px'} height={'23px'} />
        </Link>
      </div>
    </header>
  )
}

export default Header