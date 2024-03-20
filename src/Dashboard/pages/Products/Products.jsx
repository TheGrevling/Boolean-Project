import { useEffect, useState } from 'react';
import ProductList from './Components/ProductList';
import './Products.css';
import { FetchData, environment } from '../../../Services/FetchService';
import { useLocation, useParams } from 'react-router-dom'

function Products() {
  //TODO: If the url is '/search-query/:query' , then fetch the query and only find products that matches search
  //const query = 'my search query'

  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { category: categoryParam, query: searchQueryParam } = useParams();
  
  // Fetch products from API
  useEffect(() => {
    const isSearchResultsRoute = location.pathname.startsWith('/search-result/');
    const isCategoryRoute = location.pathname.startsWith('/');
    
    // Fetch products based on search
    if (isSearchResultsRoute) {
      FetchData(environment + '/products/search?q=' + searchQueryParam, setProducts)
      console.log("fetching search from " + searchQueryParam)
    } 
    // Fetch products based on category
    else if ( isCategoryRoute ) 
    {
      FetchData(environment + '/products?category=' + categoryParam, setProducts)
      console.log("fetching category from " + categoryParam)
    }
  }, [categoryParam, searchQueryParam, location]);

  return (
    <div className='page'>
      <div className='product-page'> 
        <ProductList products={products}/>
      </div>
    </div>
  )
}

export default Products