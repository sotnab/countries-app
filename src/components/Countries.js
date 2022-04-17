import { Search, KeyboardArrowDownRounded } from '@mui/icons-material'
import { useContext, useState } from 'react'
import { CountriesContext } from '../context/CountriesContext'
import Item from './Item'
import ItemSkeleton from './ItemSkeleton'

const Countries = () => {
   const countries = useContext(CountriesContext)
   const [filter, setFilter] = useState('')


   return (
      <div className="countries">
         <div className="countries__wrapper wrapper">
            <form className="countries__form">
               <Search className="countries__icon" />
               <input
                  type="text"
                  className="countries__input countries__input--text"
                  placeholder="Search for a country..."
               />
            </form>

            <div className="countries__select">
               <select
                  className="countries__input countries__input--select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  aria-labelledby="select-label"
               >
                  <option id="select-label" value="" disabled hidden>Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
               </select>

               <KeyboardArrowDownRounded
                  className="countries__arrow"
                  fontSize="small"
                  sx={{ pointerEvents: 'none' }}
               />
            </div>

            <div className="countries__main">
               {!countries.length && (
                  <>
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                     <ItemSkeleton />
                  </>
               )}

               {filter.length ? countries.filter((item) => item.region === filter).map((item) => (
                  <Item item={item} key={item.numericCode} />
               )) : countries.map((item) => (
                  <Item item={item} key={item.numericCode} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Countries