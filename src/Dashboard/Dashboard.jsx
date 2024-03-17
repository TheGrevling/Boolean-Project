import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Products from './pages/Products/Products'
import AdminView from './pages/AdminView/AdminView'
import Cart from './pages/Cart/Cart'
import CreateProfileForm from './pages/CreateProfileForm/CreateProfileForm'
import CreateOrder from './pages/CreateOrder/CreateOrder'
import './Dashboard.css'
import ProductView from './pages/ProductView/ProductView'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Routes>
      <Route path='/' element={<Navigate to="/brettspill" />}/>
      <Route path='/:category' element={<Products />} />
      <Route path='/search-results/:query' element={<Products/>} />
      <Route path='/products/:id' element={<ProductView />} />
      <Route path='/admin' element={<AdminView />} />
      <Route path='/basket' element={<Cart />} />
      <Route path='/user/wish-list' element={<Products />} /> {/* 'element=Products' Should be changed */}
      <Route path='/user/profile' element={<Products />} /> {/* 'element=Products' Should be changed */}
      <Route path='/create-profile' element={<CreateProfileForm />} />
      <Route path='/basket/checkout' element={<CreateOrder />} />
      {/* Wildcard route to handle faulty URLs */}
      <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default Dashboard