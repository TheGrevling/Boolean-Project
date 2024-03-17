import React from 'react'
import './ProductView.css'

function ProductView() {
  return (
    <div className='page'>
      <div className='product-view'>
        <div className='product-image-container'>
          <img src='https://gamezone.no/Media/Cache/Images/4/8/WEB_Image_Catan_5-6_spillere_Ekspansjon_Norsk__catan-grunnspillet-5-61567907112.jpeg'/>
          <hr className='separator'/>
        </div>
        <div className='product-info-container'>
          <h1 className='product-info-title'>Product Name</h1>
          <div className='product-cost'>199 kr</div>
  
          <div className="number-input">
            <input type="number" id="quantity" value="1"/>
            {/*<div className="arrows">
              <button id="increase">▲</button>
              <button id="decrease">▼</button>
            </div>*/}
            <button>ADD TO BASKET</button>
          </div>
          <hr className='separator'/>
          <div>
              This is some placeholder text that should be changed out later
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default ProductView