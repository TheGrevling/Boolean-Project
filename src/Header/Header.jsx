import React from 'react'
import LogoSVG from '../assets/LogoSVG'
import './Header.css'
import SearchIconSVG from '../assets/SearchIconSVG'

function Header() {
  return (
    <header>
      <LogoSVG primaryColor="var(--light-red)" secondaryColor="var(--off-white)"></LogoSVG>
      <div className='search-input'>
        <input type="text" name="q" id="searchInput" className="search-input-field" placeholder="Søk etter brettspill"/>                        
        <button className="search-input-button" type="submit">
          <SearchIconSVG width={'20px'} height={'20px'} primaryColor={'#fff'}/>
          <div className='search-inputbuttontext'>Søk</div>
        </button>
      </div>
      <div>Login</div>
    </header>
  )
}

export default Header