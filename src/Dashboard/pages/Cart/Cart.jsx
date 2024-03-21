import './Cart.css'
import CartList from './Components/CartList'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../assets/BasketIconSVG'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../App'
import { environment, PostData } from '../../../Services/FetchService'

function Cart() {
  const datacontext = useContext(DataContext)
  const [useless, setUseless] = useState({})
  const handleCheckout = async () => {

    PostData(environment + `/orders`, generateOrderHistoryRequestBody(datacontext.cart, datacontext.totalCost), setUseless)
    datacontext.setCart([])
  }
  function generateOrderHistoryRequestBody(cart, totalSum) {
    const today = new Date().toISOString();

    const items = cart.map(item => ({
      productId: item.productId,
      currentPrice: 0, // You may need to fetch the current price from your database or calculate it based on your data
      amount: item.quantity
    }));

    const requestBody = {
      shippingAddress: "string",
      shippingCity: "string",
      shippingPostCode: "string",
      totalSum: totalSum,
      dateOfOrder: today,
      items: items
    };
    console.log(requestBody)

    return requestBody;
  }

  return (
    <div className='page'>
      <div className='cart-view'>
        <div className='cart-top-bar'>
          Cart
        </div>
        <div className='cart-container'>
          <div className='cart-list'>
            <div className='cart-list-info'>
              <div className='cart-list-info-product'>Product</div>
              <div className='cart-list-info-price'>Price</div>
              <div className='cart-list-info-quantity'>Quantity</div>
            </div>
            <CartList />
          </div>
          <div className='cart-info'>
            <div className='cart-info-container'>
              <Link to="/checkout" className='cart-info-button-checkout' onClick={() => handleCheckout()}>
                < BasketIconSVG />
                <span>Checkout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart