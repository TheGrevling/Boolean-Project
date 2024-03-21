import './ProductListItem.css'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import PropTypes from "prop-types"
import HeartIconSVG from '../../../../assets/HeartIconSVG'
import { CartItem } from '../../../../Models/CartItem'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../../App'
import { DeleteData, environment, PostData } from '../../../../Services/FetchService'

function ProductListItem({ data }) {
  const urlLink = `/products/${data?.id}`
  const dataContext = useContext(DataContext)
  const [wishlistItem, setWishListItem] = useState({})

  const handleAddCartSubmit = () => {
    let productIndex = dataContext.cart.findIndex(obj => obj.productId === data.id)

    if (productIndex === -1) {
      // Add product to cart
      dataContext.setCart([...dataContext.cart, { productId: data?.id, quantity: 1 }])
    } else {
      // Increase quantity of product in cart
      let newCart = [...dataContext.cart];
      newCart[productIndex].quantity += 1;
      dataContext.setCart(newCart)
    }
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
      const response = await PostData(environment + `/wishlist/${data.id}`, {}, setWishListItem);
    } else {
      console.log("Deleting")
      const wishlistItemId = dataContext.wishlist.find(item => item.productId === data.id).id;
      // Item already in wishlist, remove it
      await DeleteData(environment + `/wishlist/${wishlistItemId}`, setWishListItem);
    }
    dataContext.setUpdateWishlist(true)
  };

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-container-padding'>
          <div className='product-image-align'>
            <button className='product-button-wishlist' onClick={handleFavorite}> {/* TODO: add this product to the wishlist array in datacontext*/}
              <HeartIconSVG />
            </button>
            <Link to={urlLink}>
              <img className='image-container' src={data.imageURL} />
            </Link>
          </div>
          <Link to={urlLink} className='product-container-title'>
            {data?.name}
          </Link>
          <div className='product-container-price'>{data?.price} kr</div>
        </div>
        <button className='product-button-add-item' onClick={handleAddCartSubmit}>
          <BasketIconSVG />
          ADD TO BASKET
        </button>
      </div>
    </div>
  )
}

ProductListItem.propTypes = {
  data: PropTypes.object.isRequired
}


export default ProductListItem