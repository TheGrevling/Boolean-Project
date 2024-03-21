import { useContext, useEffect, useState } from 'react'
import './ProductView.css'
import { useParams } from 'react-router-dom'
import HeartIconSVG from '../../../assets/HeartIconSVG'
import { DeleteData, FetchData, PostData, environment } from '../../../Services/FetchService'
import Reviews from './Components/Reviews'
import NewReview from './Components/NewReview'
import { DataContext } from '../../../App'
  
  
function ProductView() {
  let { id } = useParams()
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dataContext = useContext(DataContext)

  useEffect(() => {
    FetchData(environment + `/products/${id}`, setData)
  }, [id] )

  const handleQuantityOnChange = (event) => {
    setQuantity(event.target.value)
  }

  const uselessFunc = (data) => {
  }
  
  const handleFavorite = async () => {
    if (!dataContext.userData.id) {
      alert('Please log in to add items to the wishlist.');
      return;
    }
    console.log(dataContext.wishlist);
    console.log(data)
    const index = dataContext.wishlist.findIndex(item => {
      return item.productId === data.id;
    });
    if (index === -1) {
      console.log("adding")
      // Item not in wishlist, add it
      const response = await PostData(environment + `/wishlist/${data.id}`, {}, uselessFunc);
    } else {
      console.log("Deleting")
      const wishlistItemId = dataContext.wishlist.find(item => item.productId === data.id).id;
      // Item already in wishlist, remove it
      await DeleteData(environment + `/wishlist/${wishlistItemId}`, uselessFunc);
    }
    dataContext.setUpdateWishlist(true)
  };

  const handleAddCartSubmit = () => {
    let productIndex = dataContext.cart.findIndex(obj => obj.productId === data.id)

    if (productIndex === -1) {
      // Add product to cart
      dataContext.setCart([...dataContext.cart, { productId: data?.id, quantity: parseInt(quantity) }])
    } else {
      // Increase quantity of product in cart
      let newCart = [...dataContext.cart];
      newCart[productIndex].quantity += parseInt(quantity);
      dataContext.setCart(newCart)
    }
  }

  return (
    <div className='page'>
      <div className='product-view'>
        <div className='product-image-container'>
          <img src={data?.imageURL}/>
          <hr className='separator'/>
        </div>
        <div className='product-info-container'>
          <h1 className='product-info-title'>{data.name}</h1>
          <div className='product-cost'>{data.price} kr</div>
  
          <div className="number-input">
            <input type="number" id="quantity" value={quantity}  min="1" onChange={handleQuantityOnChange}/>
            {/*<div className="arrows">
              <button id="increase">▲</button>
              <button id="decrease">▼</button>
            </div>*/}
            <button onClick={handleAddCartSubmit}>ADD TO BASKET</button>
            <button className='wishlist-button' onClick={handleFavorite}>
              <HeartIconSVG/>
            </button>
          </div>
          <div>
          <hr className='separator'/>
            <div>
                {data.description}
            </div>
            <hr className='separator'/>
            <div>
              Producer: {data.producer}
            </div>
            <hr className="separator"/>
            <div className='review-container'>
              <Reviews/>
            </div>
            <p></p>
            <div className='review-container'>
              <NewReview/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView