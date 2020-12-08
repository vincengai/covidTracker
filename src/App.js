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
        dailyData: {}
    }

    async componentDidMount() {
        // await because fetchData is an asynchronous function
        // After you fetched the data from API Call, you setState on the fetchedData 
        const fetchedData = await fetchData();
        this.setState( {data: fetchedData} )

        // const fetchedDailyData = await fetchDailyData();
        // this.setState({ dailyData: fetchedDailyData });
    }


    render() {
        const {data, dailyData} = this.state;
        
        return (
            <div className={styles.container}>
                <Cards data={data} dailyData={dailyData}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App; 