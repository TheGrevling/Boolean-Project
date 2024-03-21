import './CartListItem.css'
import TrashIconSVG from '../../../../assets/TrashIconSVG'
import PropTypes from 'prop-types';
import { CartItem } from '../../../../Models/CartItem';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../../App';

function CartListItem({data, products, setProducts}) {
  const dataContext = useContext(DataContext);
  const [quantity, setQuantity] = useState(dataContext.cart.find(item => item.productId === data.id)?.quantity)
  
  //const quantity = dataContext;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);

    // Update dataContext Quantity
    let newCart = [...dataContext.cart];
    newCart.find(item => item.productId === data.id).quantity = newQuantity;

    dataContext.setCart(newCart)
    setQuantity(newQuantity)
  };

  useEffect(() => {
    setQuantity(dataContext.cart.find(item => item.productId === data.id)?.quantity);
  }, [dataContext.cart, data.id]);

  const handleRemoveClick = () => {
    let newProductList = [...products];
    let newCart = [...dataContext.cart];
    const productIndex = newProductList.findIndex(product => product.id === data.id);
    const cartProductIndex = newCart.findIndex(item => item.productId === data.id)
    
    newProductList.splice(productIndex, 1)
    newCart.splice(cartProductIndex, 1)

    const removedQuantity = dataContext.cart.find(item => item.productId === data.id)?.quantity;
    setQuantity(removedQuantity);

    setProducts(newProductList)
    dataContext.setCart(newCart);
}

  return (
    <div className='item-container'>
        <div className='item-info-container'>
          <div className='item-info-image'>
            <img 
              src={data.imageURL}
            />
          </div>
          <div className='item-info-name'>
            {data.name}
          </div>
          <div className='item-info-price'>{data.price} kr</div>
        <div className='item-info-quantity'>
          <input 
            className='item-input-quantity' 
            type="number" 
            id="quantity" 
            value={quantity} 
            min="1" 
            max="99" 
            onChange={handleQuantityChange} 
          />
        </div>
        <div className='item-button-list-remove'>
          <button className='item-button-remove' onClick={handleRemoveClick}>
            <TrashIconSVG className='item-button-remove-icon'/>
          </button>
        </div>
        </div>
    </div>
  )
}
CartListItem.propTypes = {
	data: PropTypes.object.isRequired, 
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired
}


export default CartListItem