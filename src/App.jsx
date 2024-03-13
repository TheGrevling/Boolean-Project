import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SideMenu/>
      <Dashboard/>
    </>
  )
}

export default App
