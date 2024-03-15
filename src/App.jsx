import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'

function App() {
  return (
    <div className="app-container">
      <Header />
      <SiteBar />
      <div className="sub-header-container">
        {/*<SideMenu />*/}
        <Dashboard />
  </div>
    </div>
  )
}

export default App
