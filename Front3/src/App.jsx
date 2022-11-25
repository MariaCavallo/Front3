import React, { Fragment, useState } from 'react'
import LoginContainer from './components/week_6/class_1/pages/auth/login/Login.container'

export const getValue = (value) => {
    if (value === "expected") {
        return 1;
    }
    return 0;
}

const App = ({ person }) => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div>
            <h1>Hola {person}</h1>
            <LoginContainer setIsAuth={setIsAuth} />
        </div>
    )
}

export default App