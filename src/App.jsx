import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="sub-header-container">
        <SideMenu />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
