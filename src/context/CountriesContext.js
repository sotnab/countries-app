import { createContext, useEffect, useState } from 'react'

const API_URL = 'https://restcountries.com/v2/all'

export const CountriesContext = createContext([])

const CountriesContextProvider = ({ children }) => {
   const [countries, setCountries] = useState([])

   useEffect(() => {
      const getCountries = async () => {
         const response = await fetch(API_URL)
         const data = await response.json()
         setCountries(data)
      }

      getCountries()

      return () => setCountries([])
   }, [])

   return (
      <CountriesContext.Provider value={countries}>
         {children}
      </CountriesContext.Provider>
   )
}

export default CountriesContextProvider