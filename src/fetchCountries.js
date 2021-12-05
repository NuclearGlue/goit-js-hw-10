let countryChoose = 'Ukraine'
fetch(`https://restcountries.com/v3.1/name/${countryChoose}?fields={name.official},{capital},{population},{flags.svg},{languages}`)
    .then(response => {
        if (!response.ok) {
      throw new Error(response.status);
    }
        return response.json()
        
    }).then(country => {
        console.log(country);
        const flag = countryCardTpl(country);
    }).catch(error => {
    console.log(error)
})

