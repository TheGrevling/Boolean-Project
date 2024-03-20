import React from 'react'
import  './ProductListItem.css'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import PropTypes from "prop-types"
import HeartIconSVG from '../../../../assets/HeartIconSVG'

function ProductListItem({data}) {
  const urlLink = `/products/${data?.id}`

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-container-padding'>
          <div className='product-image-align'>
            <button className='product-button-wishlist'> {/* TODO: Add functionallity*/}
              <HeartIconSVG/>
            </button>
            <Link to={urlLink}>
              <img className='image-container' src={data.imageURL}/>
            </Link>
          </div>
          <Link to={urlLink} className='product-container-title'>
            {data?.name}
          </Link>
          <div className='product-container-price'>{data?.price} kr</div>
        </div>
      <button className='product-button-add-item'> {/* TODO: Add functionallity*/}
        <BasketIconSVG />
        ADD TO BASKET
      </button>
      </div>
    </div>
  )
}

ProductListItem.propTypes = { 
	data: PropTypes.object.isRequired
}


export default ProductListItem