import React from 'react'
import ThemeContextProvider from './ThemeContext'
import UserContextProvider from './UserContext'

function ContextReducer(props) {
  return (
    <UserContextProvider>
        <ThemeContextProvider>
            {props.children}
        </ThemeContextProvider>
    </UserContextProvider>
    
  )
}

export default ContextReducer