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

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);

        // Data is the POJO of received data
        // modify the POJO to select the Keys you wanted to be returned
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;

    } catch (error) {
        
    }
}

