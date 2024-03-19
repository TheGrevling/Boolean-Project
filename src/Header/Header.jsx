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
      <Link to='/'>
        <LogoSVG primaryColor="var(--light-red)" secondaryColor="var(--off-white)"></LogoSVG>
      </Link>
      <div className='search-input'>
        <input type="text" name="q" id="searchInput" className="search-input-field" placeholder="Search a game..."/>                        
        <Link to='/search-result/' className="search-input-button" type="submit"> {/* Update url path to include query*/}
            <SearchIconSVG width={'23px'} height={'23px'} primaryColor={'#fff'}/>
            Search
        </Link>
      </div>

      <div className="header-button-list">
        <Link to='/user/wishlist' className='header-button'>
         <HeartIconSVG/>
        </Link>
        <Link to='/sign-in' className='header-button'>  {/*TODO: Add conditional rendering. If user is not logged in, show "Sign in" and route to '/sign-in'. If user  is logged in, show '{username}' and route to /user/profile*/}
          <ProfileIconSVG/>
          Sign In
        </Link>
        <Link to='/basket' className='header-button'>
          <BasketIconSVG width={'23px'} height={'23px'} />
          <div className="notification-circle">5</div> {/*TODO: Add conditional rendering & Change number to value */}
        </Link>
      </div>
    </header>
  )
}

export default Header