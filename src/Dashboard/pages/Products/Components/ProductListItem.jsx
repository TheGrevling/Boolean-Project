import React from 'react'
import  './ProductListItem.css'
import { Link } from 'react-router-dom'

function ProductListItem() {
  const url = '/'

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-container-padding'>
          <Link to={url}>
            <img className='image-container' src='https://gamezone.no/Media/Cache/Images/4/8/WEB_Image_Catan_5-6_spillere_Ekspansjon_Norsk__catan-grunnspillet-5-61567907112.jpeg'/>
          </Link>
          <Link to={url} className='product-container-title'>
            Catan Grunnspill
          </Link>
          <div className='product-container-price'>199 kr</div>
        </div>
      </div>
      <button className='product-button-add-item'>
        LEGG I KURV
      </button>
    </div>
  )
}

export default ProductListItem