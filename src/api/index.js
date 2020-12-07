// Data Fetching Functions

import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


//asynch fat arrow function 
// this await asynchronous function deals w/ promises the same way as .then && .catch
// easier to read and write

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

