
import './css/styles.css';
import '/fetchCountries';
import debounce from 'lodash.debounce';
import API from '/fetchCountries';


const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


const DEBOUNCE_DELAY = 300;
const textField = document.querySelector('#search-box');

 
textField.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));

function onInput(event) {
    const field = event.target;
    const fieldContent = field.value;


    API.findCountry(fieldContent)
    //.then(renderCountries)
    //.catch(error => {console.log(error)}).finaly(() => field.reset())
} 



// function renderCountries(country) {
//     const markup = countryCardTpl(country);
//     refs.cardContainer.innerHTML = markup;
// }
