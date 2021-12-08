function findCountry(countryName) {
    const name = countryName.trim();
    
return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
     .then(response => {
        if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
    })
    
}
   
export default { findCountry };
