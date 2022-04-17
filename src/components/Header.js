import { DarkModeOutlined } from '@mui/icons-material'
import { DarkMode } from '@mui/icons-material'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
   const { theme, toggle } = useContext(ThemeContext)

   return (
      <header className="header">
         <div className="header__wrapper wrapper">
            <h1 className="header__title">Where in the world?</h1>
            <button className="header__toggle-theme" onClick={toggle}>
               {theme === 'light' && <DarkModeOutlined fontSize="small" />}
               {theme === 'dark' && <DarkMode fontSize="small" />}
               <span className="header__name">Dark Mode</span>
            </button>
         </div>
      </header>
   )
}

export default Header