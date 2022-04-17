import { createContext, useEffect, useRef, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState('light')
   const isInitial = useRef(true)

   const toggle = () => {
      if (theme === 'light') setTheme('dark')
      else setTheme('light')

      localStorage.setItem('theme', theme)
   }

   useEffect(() => {
      const localTheme = localStorage.getItem('theme')
      if (localTheme) setTheme(localTheme)
   }, [])

   useEffect(() => {
      if (isInitial.current) {
         isInitial.current = false
         return
      }

      localStorage.setItem('theme', theme)
   }, [theme])

   return (
      <ThemeContext.Provider value={{ theme, toggle }}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeContextProvider