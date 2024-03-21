import { useState } from 'react'
import './CartList.css'
import CartListItem from './CartListItem'
import { FetchData, environment } from '../../../../Services/FetchService';

function CartList() {
  const [cartProducts] = useState([]);

  return (
    <div className='cart-list'>
    <hr className='line'/>
    {cartProducts.map((cartItem, index) => (
      <CartListItem key={index} data={cartItem} />
    ))}
      <hr className='line'/>
    </div>
  )
}

export default CartList