import React from 'react'
import './Wishlist.css'
import WishlistList from './Components/WishlistList'
import HeartIconSVG from '../../../assets/HeartIconSVG'

function Wishlist() {
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
            <WishlistList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist