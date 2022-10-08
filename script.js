// My Variables

const countriesList = document.getElementById('countriesList');
const searchBar = document.getElementById('searchBar');
let countriesData =[];


searchBar.addEventListener('keyup', (e) => {
   const searchString= e.target.value.toLowerCase();
    const filteredCountries = countriesData.filter( country => {
       return country.toLowerCase().includes(searchString)
    });
    console.log(filteredCountries);
    displayCountryData(filteredCountries)    
}); 
// Getting data from the api service
const loadCountryData = async () => {
    try {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries/population');
        data = await res.json();
        
        data.data.forEach(element => {
            countriesData.push(element['country'].toString());            
        });        
        
        displayCountryData(countriesData);
                      
    } catch (err) {
        console.error(err);        
    }
};

// Generating my list of countries tags
const displayCountryData = (countries) => {
    const htmlString = countries.sort()
        .map((country) => {
            return`
            <li class="country">
                <h2>${country}</h2> 
            </li>       
        `;
        })
        .join('');
    countriesList.innerHTML = htmlString;
};



loadCountryData();