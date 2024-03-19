import React, { useEffect, useState } from 'react'
import './ProductView.css'
import { Link, useParams } from 'react-router-dom'
import HeartIconSVG from '../../../assets/HeartIconSVG'
import { FetchData, environment } from '../../../Services/FetchService'

  
function ProductView() {
  let { id } = useParams()
  const [data, setData] = useState({});

  useEffect(() => {
    FetchData(environment + `/products/${id}`, setData)
  }, [] )

/* EXAMPLE Of data 
{ 
  "id": 2,
  "name": "Mystic Magic",
  "producer": "Mythical Games",
  "price": 152,
  "category": 0,
  "description": "Description of boardgame",
  "imageURL": "https://gamezone.no/Media/Cache/Images/4/7/WEB_Image_Catan_Grunnspill_(Norsk)_Brettspill__catan-grunnspill820591365_plid_44797.jpeg",
  "reviewsList": null
}*/

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
            <input type="number" id="quantity" value="1"  min="1"/>
            {/*<div className="arrows">
              <button id="increase">▲</button>
              <button id="decrease">▼</button>
            </div>*/}
            <button>ADD TO BASKET</button>
            <button className='wishlist-button'>
              <HeartIconSVG/>
            </button>
          </div>
          <hr className='separator'/>
          <div>
              {data.description}
          </div>
          <hr className='separator'/>
          <div>
            Producer: {data.producer}
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default ProductView