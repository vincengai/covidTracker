import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './Country.module.css';

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect( () => {
    const fetchCountriesAPI = async () => {
      let initialCountriesData = await fetchCountries();
      
      setFetchedCountries(initialCountriesData);
    }

    fetchCountriesAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map( (country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;
