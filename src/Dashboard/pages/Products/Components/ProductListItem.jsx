import React from 'react'
import  './ProductListItem.css'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import PropTypes from "prop-types"

function ProductListItem({data}) {
  const urlLink = `/products/${data?.id}`

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-container-padding'>
          <Link to={urlLink}>
            <img 
              className='image-container' 
              src={data.imageURL}
            />
          </Link>
          <Link to={urlLink} className='product-container-title'>
            {data?.name}
          </Link>
          <div className='product-container-price'>{data?.price} kr</div>
        </div>
      <button className='product-button-add-item'>
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