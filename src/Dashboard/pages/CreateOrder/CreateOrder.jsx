import React from 'react'
import './CreateOrder.css'
import { Link } from 'react-router-dom'

function CreateOrder() {
  return (
    <div className='page'>
      <div className='order-view'>
        <div className='order-container-bar'>
          Purchase Complete
        </div>
        <div className='order-container'>
         <div>
          Thank you for your purchase!
         </div>
         <Link to='/' className='order-button-return'>
          Buy more
         </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateOrder