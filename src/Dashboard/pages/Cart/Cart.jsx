import './Cart.css'
import CartList from './Components/CartList'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../assets/BasketIconSVG'

function Cart() {

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
            <Link to="/checkout" className='cart-info-button-checkout'>
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