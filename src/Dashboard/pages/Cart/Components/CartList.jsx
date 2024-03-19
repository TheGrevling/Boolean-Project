import React from 'react'
import './CartList.css'
import CartListItem from './CartListItem'

function CartList() {
  return (
    <div className='cart-list'>
    <hr className='line'/>
      <CartListItem />
      <hr className='line'/>
    </div>
  )
}

export default CartList