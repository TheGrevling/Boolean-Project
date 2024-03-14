import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'

function App() {
  return (
    <>
      <Header/>
      <SideMenu/>
      <Dashboard/>
    </>
  )
}

export default App
