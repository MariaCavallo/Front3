import React from 'react'
import MyComponent from './MyComponent'

const AppError = () => {
    return(
        <ErrorBoundary>
            <MyComponent />
        </ErrorBoundary>
    )
}

export default AppError;