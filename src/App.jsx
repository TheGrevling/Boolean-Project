import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import Footer from './Footer/Footer'
import { useEffect, useState, createContext } from 'react'

export const DataContext = createContext();

function App() {


  return (
    
    <div className="app-container">
      <DataContext.Provider value={{}}>
        <div className="sub-header-container">
           <Header />
           <SiteBar />
           {/*<SideMenu />*/}
           <Dashboard />
        </div>
        {/*<Footer />*/}
      </DataContext.Provider>
    </div>
  )
}

export default App
