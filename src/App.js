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
        country: '',
    }

    async componentDidMount() {
        // await because fetchData is an asynchronous function
        // After you fetched the data from API Call, you setState on the fetchedData 
        const fetchedData = await fetchData();
        this.setState( {data: fetchedData} )
    }

    handleCountryChange =  async (country) => {
        //fetch data
        const fetchedData = await fetchData(country);
        // set State so it can be passed to child components
        this.setState( {data: fetchedData, country: country} )

    }


    render() {
        const {data, country} = this.state;
        
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App; 