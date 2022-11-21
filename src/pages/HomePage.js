import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/homepage.css'


function HomePage() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode===true ? 'home-page home-page-dark' : 'home-page'}>
      
    </div>
  )
}

export default HomePage