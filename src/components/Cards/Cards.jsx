import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

//Passed in 'data' as props to Cards function
// Now you destructure {data}

// Destructure again w/ {confirmed} = data
const Cards = ({data}) => {
    const {confirmed, recovered, deaths, lastUpdate} = data

    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected  </Typography>
                        <Typography variant="h5" gutterBottom> <CountUp start={0} end={confirmed.value} duration={2} seperator=","/></Typography>
                        <Typography color="textSecondary" gutterBottom>  REAL DATE </Typography>
                        <Typography color="textSecondary" gutterBottom>  Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant="h5" gutterBottom> REAL DATA </Typography>
                        <Typography color="textSecondary" gutterBottom>  REAL DATE </Typography>
                        <Typography color="textSecondary" gutterBottom>  Number of recover from COVID-19 </Typography>
                    </CardContent>
                </Grid>                
                
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="h5" gutterBottom> REAL DATA </Typography>
                        <Typography color="textSecondary" gutterBottom>  REAL DATE </Typography>
                        <Typography color="textSecondary" gutterBottom>  Number of deaths caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;