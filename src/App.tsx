import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { RegisterPage } from './Pages/RegisterPage';
import { checkIsLoggedIn } from './services/auth.service';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = checkIsLoggedIn();
    setisLoggedIn(isLoggedIn);
  
  }, [])
  



  return (
    <div className="App">
      <nav>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'}>About</Link>

      {isLoggedIn && <loggedInMenu />}
      {isLoggedIn || <LoggedOutMenu />}

      </nav>
      
    </div>
  );
}

export default App;
