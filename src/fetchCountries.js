import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const textField = document.querySelector('#search-box');

 
textField.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));

function onInput(event) {
    const field = event.target;
    const fieldContent = field.value;


    findCountry(fieldContent)
    //.then(renderCountries)
    //.catch(error => {console.log(error)})
} 


function findCountry(countryName) {
    
return fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`)
     .then(response => {
        return response.json();
    })
    
}
   

// function renderCountries(country) {
//     const markup = countryCardTpl(country);
//     refs.cardContainer.innerHTML = markup;
// }

