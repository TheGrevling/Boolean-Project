import React from 'react'
import ProductList from './Components/ProductList'
import './Products.css';

function Products() {
  //TODO: If the url is '/search-query/:query' , then fetch the query and only find products that matches search
  //const query = 'my search query'

  return (
    <div className='page'>
      <div className='product-page'>
        <ProductList/>
      </div>
    </div>
  )
}

export default Products