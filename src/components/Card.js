
const Card = () =>{
    return(
        <div class="card">
        <a href="./country.html" id="country-link" ><img src="${png}" alt="flag" class="card-img"></img></a>
        <div class="card-info">
            <h2 class="card-country-name"></h2>
            <p class="card-population-title">Population: <span class="card-population"></span></p>
            <p class="card-region-title">Region: <span class="card-region"></span></p>
            <p class="card-capital-title">Capital: <span class="card-capital"></span></p>
        </div>
        </div>
    )
}