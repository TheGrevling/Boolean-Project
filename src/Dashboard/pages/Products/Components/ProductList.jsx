import ProductListItem from './ProductListItem'
import './ProductList.css'
import PropTypes from 'prop-types'


function ProductList({products}) {

  return (
      <div className='list-container'>
        {products.map((item, index) => (
          <ProductListItem key={index} id={index} data={item} />
        ))}
      </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList