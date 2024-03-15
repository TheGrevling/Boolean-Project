import React from 'react'
import ProductList from './Components/ProductList'
import './Products.css';

function Products() {
  return (
    <div className='page'>
      <div className='product-page'>
        <ProductList/>
      </div>
    </div>
  )
}

export default Products