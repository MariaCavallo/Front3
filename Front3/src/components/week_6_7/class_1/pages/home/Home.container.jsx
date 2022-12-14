import React, { useState, useEffect } from 'react'
import Home from './Home'
import { useGetData } from '../../../hooks/useGetData'
import { useNavigate } from 'react-router-dom'

const HomeContainer = () => {
  const [userSearch, setUserSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { data: usersData, isLoading, error } = useGetData(import.meta.env.VITE_APP_API_GH);


  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("clicked", userSearch)
    if (userSearch.length !== 0) {
      navigate(`/users/user/${userSearch}`);
    } else {
      setErrorMessage("You must provide a user before the search")
    }
  }

  const childProps = {
    usersData,
    userSearch,
    setUserSearch,
    errorMessage,
    handleSubmit
  }

  return <Home {...childProps} />
}

export default HomeContainer