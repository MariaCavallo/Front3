import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from './context-dark-mode/DarkMode';


const About = () => {
    const { state, dispatch } = useContext(DarkModeContext);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Yo soy ABOUT</h1>
            <button onClick={() => navigate("/")}>Volver a HOME</button>
            <button onClick={() => dispatch({ type: state.bgFlag })}>🌜</button>
        </div>
    )
}

export default About