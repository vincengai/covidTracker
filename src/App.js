import React from 'react';
import { Cards, Chart, CountryPicker } from "./components/";
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
    state = {
        data: {},   
    }

    async componentDidMount() {
        // await because fetchData is an asynchronous function
        const fetchedData = await fetchData();
        // After you fetched the data from API Call, 
        // you setState on the fetchedData 
        this.setState( {data: fetchedData} )
    }


    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App; 