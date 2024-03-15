import React from 'react'
import ProductListItem from './ProductListItem'
import './ProductList.css'

function ProductList() {
  return (
      <div className='list-container'>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
  )
}

export default ProductList