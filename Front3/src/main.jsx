import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./AppRouter";
import './index.css'
import DarkModeProvider from './components/week_6_7/class_2/context-dark-mode/DarkMode'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
    </React.StrictMode>
)
