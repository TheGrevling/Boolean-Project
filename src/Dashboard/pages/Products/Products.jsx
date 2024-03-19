import React, { useEffect, useState } from 'react';
import ProductList from './Components/ProductList';
import './Products.css';
import { FetchData, environment } from '../../../Services/FetchService';

function Products() {
  //TODO: If the url is '/search-query/:query' , then fetch the query and only find products that matches search
  //const query = 'my search query'
  const [products, setProducts] = useState([]);

  useEffect(() => {
      FetchData(environment + '/products', setProducts)
      console.log(products)
  }, [] );

  return (
    <div className='page'>
      <div className='product-page'>
        <ProductList products={products}/>
      </div>
    </div>
  )
}

export default Products