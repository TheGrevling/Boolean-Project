import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Products from './pages/Products/Products'
import AdminView from './pages/AdminView/AdminView'
import Cart from './pages/Cart/Cart'
import CreateProfileForm from './pages/CreateProfileForm/CreateProfileForm'
import CreateOrder from './pages/CreateOrder/CreateOrder'

function Dashboard() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/admin' element={<AdminView />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/createprofile' element={<CreateProfileForm />} />
      <Route path='/createorder' element={<CreateOrder />} />
      </Routes>
    </div>
  )
}

export default Dashboard