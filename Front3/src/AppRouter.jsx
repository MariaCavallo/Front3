import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/week_6/class_1/pages/home/Home.container';
import ProtectedRoutes from './components/week_6/class_1/components/protected-routes/ProtectedRoutes';
import AboutPage from './components/week_6/class_1/pages/about/About.container';
import LoginPage from './components/week_6/class_1/pages/auth/login/Login.container';
import ErrorPage from './components/week_6/class_1/pages/error/Error';
import UserPage from './components/week_6/class_1/pages/user/User.container';
import AuthenticationProvider from './components/week_6_7/class_1/context/GhContext';
import Home from './components/week_6_7/class_2/Home';
import About from './components/week_6_7/class_2/About';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <AuthenticationProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default AppRouter