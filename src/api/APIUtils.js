// Data Fetching Functions

import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//asynch fat arrow function 
// this await asynchronous function deals w/ promises the same way as .then && .catch
// easier to read and write

// const countries = [a,b,c,d,e]
// const globalData = [];

// export const globalData = async() => {
//     try {
//         for (let country of countries) {
//         const url = `https://covid19.mathdro.id/${country}`;
            
//             globalData.push(await axios.get(url))
//         }
//         return globalData

//     } catch (error) {

//     }
// }

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data } = await axios.get(changeableUrl);

        // Data is the POJO of received data
        // modify the POJO to select the Keys you wanted to be returned
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

        return modifiedData;

    } catch (error) {
        
    }
}


export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)

        return countries.map( (country) => country.name)
    } catch (error) {
        console.log(error)
    }
}

// export const fetchCountry = async() => {
//     try {
//         const { data } = await axios.get('https://covid19.mathdro.id/api/countries/')

//         return data.map( ({confirmed, recovered, deaths}) => ({confirmed, recovered, deaths}))
//     } catch (error) {
        
//     }
// }