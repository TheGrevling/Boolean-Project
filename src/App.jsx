import './App.css'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import { useState, createContext, useEffect } from 'react'
import { getCookie, setCookie } from './Services/CookieService'

export const DataContext = createContext();

function App() {
  const [userData, setUserData] = useState(() => {
    // Load id, email, and username from localStorage on component mount
    const idFromStorage = localStorage.getItem('id');
    const emailFromStorage = localStorage.getItem('email');
    const usernameFromStorage = localStorage.getItem('username');
    
    return {
      id: idFromStorage || "",
      email: emailFromStorage || "",
      username: usernameFromStorage || ""
    };
  });
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem('cart');

    if(cartItems) return cartItems;
    else return [];
  });

  //localStorage.setItem(key, value);

  const updateUserAndSetToken = (userDataWithToken) => {
    const { id, email, username, accessToken } = userDataWithToken;
    console.log(accessToken)
    setUserData({ id, email, username });
    setCookie('accessToken', accessToken, 1); // Set access token in cookie
  };

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

  // useEffect to update localStorage when id, email, and username change
  useEffect(() => {
    localStorage.setItem('id', userData.id);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('username', userData.username);
  }, [userData.id, userData.email, userData.username]);

  return (
    <div className="app-container">
      <DataContext.Provider value={{
          userData: userData, 
          setUserData: setUserData, 
          cart: cart, 
          setCart: setCart, 
          updateUserAndSetToken: updateUserAndSetToken
        }}>
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
