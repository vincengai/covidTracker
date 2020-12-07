// Data Fetching Functions

import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


//asynch fat arrow function 
// this await asynchronous function deals w/ promises the same way as .then && .catch
// easier to read and write

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response;
        
    } catch (error) {
        
    }
}

