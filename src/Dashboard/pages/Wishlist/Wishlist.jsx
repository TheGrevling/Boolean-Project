import './Wishlist.css'
import WishlistList from './Components/WishlistList'
import HeartIconSVG from '../../../assets/HeartIconSVG'
import { DataContext } from '../../../App'
import { useContext } from 'react'


function Wishlist() {
  const dataContext = useContext(DataContext)
  // TODO: If User is not logged in, say 

  return (
    <div className='page'>
      <div className='wishlist-view'>
        <div className='wishlist-container'>
          <div className='wishlist-container-top'>
            <HeartIconSVG />
            <span>
              Wishlist
            </span>
          </div>
          <div className='wishlist-container-bottom'>
            <WishlistList wishlist={dataContext.wishlist}/>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='page'>
      <div className='wishlist-view'>
        <div className='wishlist-container'>
          <div className='wishlist-container-top'>
            <HeartIconSVG />
            <span>
              Wishlist
            </span>
          </div>
          <div className='wishlist-container-bottom'>
            <div className='wishlist-user-error-text'>
              You must sign in first before viewing
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist