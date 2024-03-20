import './App.css'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import SiteBar from './SiteBar/SiteBar'
import { useState, createContext, useEffect } from 'react'

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

export const deleteStoredUser = ()=>{
  localStorage.removeItem('id');
  localStorage.removeItem('email');
  localStorage.removeItem('username');
  deleteCookie('accessToken')
}

 // Function to set cookie
 export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

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
      <DataContext.Provider value={{userData: userData, setUserData: setUserData, updateUserAndSetToken: updateUserAndSetToken}}>
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
