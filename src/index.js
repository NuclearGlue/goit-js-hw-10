import './css/styles.css';
import '/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const textField = document.querySelector('#search-box')
