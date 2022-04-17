import { Link } from "react-router-dom"

const Item = ({ item }) => {
   return (
      <Link to={`/details/${item.alpha3Code}`} className="countries__item" >
         <img src={item.flags.svg} alt={item.name + ' flag'} className="countries__img" />
         <div className="countries__info">
            <h2 className="countries__title">{item.name}</h2>
            <p className="countries__text">
               <strong className="countries__strong">Population: </strong>{item.population.toLocaleString('en-US')}<br />
               <strong className="countries__strong">Region: </strong>{item.region}<br />
               <strong className="countries__strong">Capital: </strong>{item.capital}
            </p>
         </div>
      </Link>
   )
}

export default Item