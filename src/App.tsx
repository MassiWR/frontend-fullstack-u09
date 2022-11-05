import React, { useEffect, useState } from 'react';

import './App.css';
import { Navbar } from './Components/NavBar/NavBar';
import { MyRouter } from './Components/Routes/Routes';
import { LoginPage } from './Pages/LoginPage';

import { RegisterPage } from './Pages/RegisterPage';
import AuthService from './services/auth.service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRouter />
    </div>
  );
}

export default App;
