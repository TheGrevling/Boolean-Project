import './App.css'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import { useState, createContext, useEffect } from 'react'
import { getCookie, setCookie } from './Services/CookieService'
import { environment, FetchData } from './Services/FetchService'

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

    if (cartItems) return cartItems;
    else return [];
  });

  const [wishlist, setWishlist] = useState([]);
  const [updateWishlist, setUpdateWishlist] = useState(false)

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
      //if the usercookie exists, get the users wishlist
      FetchData(environment + '/wishlist/myWishlist', setWishlist)
    }
  }, []);

  useEffect(() => {
    if (updateWishlist){
      FetchData(environment + '/wishlist/myWishlist', setWishlist); console.log(wishlist)
      setUpdateWishlist(false)
    }
  }, [updateWishlist])

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
        wishlist: wishlist,
        setUpdateWishlist: setUpdateWishlist,
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
