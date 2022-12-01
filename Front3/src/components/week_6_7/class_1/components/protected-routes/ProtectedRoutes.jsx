import React from 'react'
import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { AuthenticationContext } from '../../context/GhContext';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthenticationContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoutes;