import './App.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import Footer from './Footer/Footer'
import { useEffect, useState, createContext } from 'react'

export const DataContext = createContext();

// Function to get cookie value by name
export const getCookie = (name) => {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

function App() {
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    username: "",
    role: "",
    accessToken: ""
  });
  useEffect(() => {
    // This effect runs on component mount to retrieve accessToken from cookies
    const accessTokenFromCookie = getCookie('accessToken');
    if (accessTokenFromCookie) {
      setUserData(prevUserData => ({
        ...prevUserData,
        accessToken: accessTokenFromCookie
      }));
    }
  }, []);
  useEffect(() => {
    // This effect runs whenever accessToken changes
    // Here you can set the accessToken into cookies
    setCookie('accessToken', userData.accessToken, 1); // Set accessToken in cookie for 1 day
    console.log(getCookie("accessToken"))

  }, [userData.accessToken]);

  // Function to set cookie
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  

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
