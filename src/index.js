
import './css/styles.css';
import '/fetchCountries';
import debounce from 'lodash.debounce';
import API from '/fetchCountries';
import countryCard from './templates/country-card.hbs';
import countryItem from './templates/country-item.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const textField = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;



textField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
    const field = event.target;
    const fieldContent = field.value;

    if (fieldContent.trim() !== '') {
        API.findCountry(fieldContent)
        .then(renderCountries)
    .catch(errorMsg)} 
}

function errorMsg() {
    Notify.failure('Oops, there is no country with that name');
}

function renderCountries(country) {
    const cardMarkup = countryCard(country);
    const itemMarkup = countryItem(country);
    
    if (country.length === 1) {
        countryInfo.innerHTML = cardMarkup;
        countryList.innerHTML = '';
    }
    else if (country.length <= 10 && country.length >= 2) {
        countryList.innerHTML = itemMarkup;
        countryInfo.innerHTML = '';
   }
    else if (country.length > 10) {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
        Notify.info('Too many matches found. Please enter a more specific name.');  
    }
    else {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
    }
}
