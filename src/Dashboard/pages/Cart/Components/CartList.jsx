import { useContext, useEffect, useState } from 'react'
import './CartList.css'
import CartListItem from './CartListItem'
import { FetchData, environment } from '../../../../Services/FetchService';
import { DataContext } from '../../../../App';

function CartList() {
  const dataContext = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState(products?.reduce((sum, { price }) => sum + price, 0) ?? 0);

  // We got an array of objects {productId, quantity}
  // Next we need to get the product ID and send in the productId and send in the relative data 
  useEffect(() => {
    let firstIteration = true;
    let request = '';
    dataContext.cart.forEach(element => {
      if(firstIteration) {
        request += 'productIds='+ element.productId;
        firstIteration = false;
      } else {
        request += '&productIds=' + element.productId;
      }
    });

      FetchData(environment + '/products/cart?' + request, setProducts)
    }, [dataContext.cart] )

  useEffect(() => {
    let sum = 0;
    products.forEach(product => 
      sum += product.price * dataContext.cart.find(item => item.productId === product.id).quantity
    )
    setCost(sum)

  }, [products, dataContext.cart]);

  return (
    <div className='cart-list'>
    <hr className='line'/>
    {products.map((productData, index) => (
      <CartListItem key={index} data={productData} products={products} setProducts={setProducts} />
    ))}
      <hr className='line'/>
      <div className='cart-total-cost'>
        Total: {cost} kr
      </div>
    </div>
  )
}

export default CartList