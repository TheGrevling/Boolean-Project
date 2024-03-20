import React from 'react'
import './WishlistListItem.css'
import { Link } from 'react-router-dom'
import HeartIconSVG from '../../../../assets/HeartIconSVG'
import TrashIconSVG from '../../../../assets/TrashIconSVG'
import BasketIconSVG from '../../../../assets/BasketIconSVG'

function WishlistListItem() {
  return (
    <div className='item-container'>
        <div className='item-info-container'>
          <img src='https://gamezone.no/Media/Cache/Images/4/8/WEB_Image_Catan_5-6_spillere_Ekspansjon_Norsk__catan-grunnspillet-5-61567907112.jpeg'/>
          <hr className='vertical-line'/>
          <div className='item-info'>
            <h3> Product Name </h3>
            <div>199 kr</div>
          </div>
        </div>
        <section className='item-button-list'>
          <Link className='item-button-basket'>
            <BasketIconSVG color='var(--white)'/>
            Add To Basket</Link>
          <Link className='item-button-favourite'>
            <TrashIconSVG/>
            Remove Item
          </Link>
        </section>
    </div>
  )
}

export default WishlistListItem