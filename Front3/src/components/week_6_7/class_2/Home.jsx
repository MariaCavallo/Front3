import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from './context-dark-mode/DarkMode'
//#393944 dark
//#eee light

const Home = () => {
    const { state, dispatch } = useContext(DarkModeContext);
    return (
        <div>
            <h1>Yo soy HOME</h1>
            <button onClick={() => dispatch({ type: state.bgFlag })}>🌜</button>
            <Link to="/about">Ir a ABOUT</Link>
        </div>
    )
}

export default Home;