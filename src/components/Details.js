import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBackRounded } from '@mui/icons-material'
import { CountriesContext } from '../context/CountriesContext'

const Details = () => {
   const [item, setItem] = useState(null)
   const [borderCountries, setBorderCountries] = useState([])
   const countries = useContext(CountriesContext)
   const { name } = useParams()
   const nav = useNavigate()

   const back = () => nav('/')

   useEffect(() => {
      const foundItem = countries.find((item) => item.name === name)
      setItem(foundItem)

   }, [name, countries])

   useEffect(() => {
      if (!item || !item.borders) return

      const foundBorderCountries = countries.filter((country) => item.borders.includes(country.alpha3Code))
      setBorderCountries(foundBorderCountries)

   }, [item, countries])

   return (
      <>
         {item && (
            <div className="details">
               <div className="details__wrapper wrapper">
                  <button className="details__back" onClick={back}>
                     <ArrowBackRounded fontSize="small" />
                     <div className="details__name">Back</div>
                  </button>

                  <img src={item.flag} alt={item.name + ' flag'} className="details__img" />

                  <h1 className="details__title">{item.name}</h1>

                  <div className="details__info details__info--first">
                     <strong className="details__strong">Native Name: </strong>{item.nativeName}<br />
                     <strong className="details__strong">Population: </strong>{item.population.toLocaleString('en-US')}<br />
                     <strong className="details__strong">Region: </strong>{item.region}<br />
                     <strong className="details__strong">Sub Region: </strong>{item.subregion}<br />
                     <strong className="details__strong">Capital: </strong>{item.capital}<br />
                  </div>

                  <div className="details__info details__info--second">
                     <strong className="details__strong">Top Level Domain: </strong>
                     {item.topLevelDomain[0]}<br />
                     <strong className="details__strong">Currencies: </strong>
                     {item.currencies.map((item) => item.name).join(', ')}<br />
                     <strong className="details__strong">Languages: </strong>
                     {item.languages.map((item) => item.name).join(', ')}
                  </div>

                  <div className="details__info details__info--third">
                     <h2 className="details__subtitle">Border Countries:</h2>

                     <div className="details__countries">
                        {item.borders ? borderCountries.map((item) => (
                           <div className="details__border-country" key={item.numericCode}>
                              {item.name}
                           </div>
                        )) : (
                           <strong className="details__strong">No border countries</strong>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default Details