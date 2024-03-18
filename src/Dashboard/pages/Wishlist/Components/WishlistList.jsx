import React from 'react'
import './WishlistList.css'
import WishlistListItem from './WishlistListItem'

function WishlistList() {
  return (
    <div className='wishlist-list'>
      <hr className='line'/>
      <div > {/* For loop goes here*/}
        <WishlistListItem/>
        <hr className='line'/>
      </div>
    </div>
  )
}

export default WishlistList