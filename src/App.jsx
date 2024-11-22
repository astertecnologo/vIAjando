import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div>
      {isLoginPage ? (
        <Login onSwitchToSignup={() => setIsLoginPage(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setIsLoginPage(true)} />
      )}
    </div>
  );
}

export default App;