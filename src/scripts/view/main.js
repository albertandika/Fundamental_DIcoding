import '../component/select-country.js';
import '../component/list-country'
import DataSource from '../data/data-source.js';
import '../component/time'
import moment from 'moment'

const main = () => {
    const selectCountry = document.querySelector('select-country');
    const buttonSearch = document.getElementById('buttonSearch')
    let selectIdCountry = selectCountry.shadowDOM.getElementById('select-country')
    const listCountry =  document.querySelector('list-country'); 
    const timeNow = document.querySelector('time-now')

    timeNow.time = moment().format('DD-MM-YYYY HH:mm:ss') + 'WIB'
    setInterval(()=> {
        timeNow.time = moment().format('DD/MM/YYYY HH:mm:ss') + 'WIB'
    }, 1000)
    
    DataSource.listSelect().then(data => {
        selectCountry.select = data
        selectIdCountry = selectCountry.shadowDOM.getElementById('select-country')
    })


    const searchCovid = async () => {
        try{
        const result = await DataSource.searchCountry(selectIdCountry.value)
        result.image= 'https://covid19.mathdro.id/api/countries/' + selectIdCountry.value +'/og'
        renderResult(result)
        }
        catch(message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        listCountry.country = results;
    };

    const fallbackResult = message => {
     console.log(message)   
    }
    buttonSearch.addEventListener("click", searchCovid);
    
};

export default main;