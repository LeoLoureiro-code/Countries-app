import './CountryDiv.css'
import Search from './Search'
import Countries from './Countries'

const CountryDiv = () =>{
    return(
        <div className ="country-div">
          <Search />
          <Countries/>
        
        </div>
    )
}

export default CountryDiv