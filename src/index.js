
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
    .then(renderCountries)
    //.catch(error => {console.log(error)})
} 



function renderCountries(country) {
    const countryObject = country.map(type => type);
   
    const cardMarkup = `<div>
    <div class='flag'>
    <img src = '${countryObject.flags}''>
    </div>
    <h2 class ='country-name'>'${countryObject.name}'</h2>
    </div>
    <p class='country-meta'>Capital:<span>${countryObject.capital}</span></p>
    <p class='country-meta'>Population:<span>${countryObject.population}</span></p>
     <p class='country-meta'>Languages:<span>${countryObject.languages}</span></p>
    `;
    
        countryInfo.innerHTML = cardMarkup;
}
