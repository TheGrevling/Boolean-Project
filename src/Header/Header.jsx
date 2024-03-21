import { useContext, useState } from 'react'
import LogoSVG from '../assets/LogoSVG'
import SearchIconSVG from '../assets/SearchIconSVG'
import BasketIconSVG from '../assets/BasketIconSVG'
import './Header.css'
import HeartIconSVG from '../assets/HeartIconSVG'
import ProfileIconSVG from '../assets/ProfileIconSVG'
import { Link } from 'react-router-dom'
import { DataContext } from '../App'

function Header() {
  const dataContext = useContext(DataContext)
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header>
      <Link to='/'>
        <LogoSVG primaryColor="var(--light-red)" secondaryColor="var(--off-white)"></LogoSVG>
      </Link>
      <div className='search-input'>
        <input type="text" name="q" id="searchInput" className="search-input-field" placeholder="Search a game..." onChange={handleInputChange}/>                        
        <Link to={`/search-result/${searchQuery}`} className="search-input-button" type="submit"> {/* Update url path to include query*/}
            <SearchIconSVG width={'23px'} height={'23px'} primaryColor={'#fff'}/>
            Search
        </Link>
      </div>

      <div className="header-button-list">
        <Link to='/user/wishlist' className='header-button'>
         <HeartIconSVG/>
        </Link>
        {/* If user is not logged in*/ }
        {dataContext.userData.id == "" ? (
          <Link to='/sign-in' className='header-button'>
            <ProfileIconSVG/>
            Sign In
          </Link>
        ) : ( 
          <Link to='/user/profile' className='header-button'>
            <ProfileIconSVG/>
            {dataContext.userData.username}
          </Link>
        )}
        <Link to='/basket' className='header-button'>
          <BasketIconSVG width={'23px'} height={'23px'} />
          <div className="notification-circle">{dataContext.cart.reduce((sum, item) => sum + item.quantity, 0)}</div>
        </Link>
      </div>
    </header>
  )
}

export default Header