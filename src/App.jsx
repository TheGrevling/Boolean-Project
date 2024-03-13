import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import SideMenu from './pages/SideMenu'
import Dashboard from './pages/Dashboard'

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
