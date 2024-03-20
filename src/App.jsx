import './App.css'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import { useState, createContext } from 'react'

export const DataContext = createContext();

function App() {
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    username: "",
    role: "",
    accessToken: ""
  });

  return (
    <div className="app-container">
      <DataContext.Provider value={{userData: userData, setUserData: setUserData}}>
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
