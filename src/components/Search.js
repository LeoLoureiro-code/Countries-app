import './Search.css'
import magnifyingGlass from '../assets/images/search.svg'


const Search = () =>{
    return(
        <div>
            <form>
                <div>
                    <label for="search-input"><img src={magnifyingGlass} alt="magnifying glass" class="search-img"></img></label>
                    <input type="text" name="search-input" id="search-input" placeholder="Search for a country..."></input>
                </div>
                <select name="region" id="region">Filter by Region
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value="africa" class="continent">Africa</option>
                <option value="america" class="continent">America</option>
                <option value="asia" class="continent">Asia</option>
                <option value="europe" class="continent">Europe</option>
                <option value="oceania" class="continent">Oceania</option>
            </select>
            </form>    
        </div> 
    )
}

export default Search