import React from 'react'
import ProductListItem from './ProductListItem'
import './ProductList.css'

function ProductList() {
  return (
      <div className='list-container'>
        {/*THESE ARE FOR TESTING, REPLACE WITH VALID DATA*/}
        <ProductListItem id={1}/>
        <ProductListItem id={1} />
        <ProductListItem id={1} />
        <ProductListItem id={1} />
        <ProductListItem id={1} />
        <ProductListItem id={1} />
        <ProductListItem id={1} />
      </div>
  )
}

export default ProductList