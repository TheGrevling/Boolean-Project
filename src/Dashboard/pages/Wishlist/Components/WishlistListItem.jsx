import React, { useContext, useState } from 'react'
import './WishlistListItem.css'
import { Link } from 'react-router-dom'
import HeartIconSVG from '../../../../assets/HeartIconSVG'
import TrashIconSVG from '../../../../assets/TrashIconSVG'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import { DeleteData, environment } from '../../../../Services/FetchService'
import { DataContext } from '../../../../App'

function WishlistListItem({data}) {
  const [item,setItem] = useState({})
  const datacontext = useContext(DataContext)
  
  const handleRemove = async () =>{
    await DeleteData(environment+`/wishlist/${data.id}`,setItem)
    datacontext.setUpdateWishlist(true)
  }
  return (
    <div className='item-container'>
        <div className='item-info-container'>
          <img src={data.product.imageURL}/>
          <hr className='vertical-line'/>
          <div className='item-info'>
            <h3> {data.product.name}</h3>
            <div>{data.product.price} kr</div>
          </div>
        </div>
        <section className='item-button-list'>
          <Link className='item-button-basket'>
            <BasketIconSVG color='var(--white)'/>
            Add To Basket</Link>
          <Link className='item-button-favourite' onClick={() =>handleRemove()}>
            <TrashIconSVG/>
            Remove Item
          </Link>
        </section>
    </div>
  )
}

export default WishlistListItem