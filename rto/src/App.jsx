import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import "./App.css"
import Header from './components/Header/Header';
import Landing from './containers/Landing/Landing';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<Landing/>}/>            
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}



export default App;
