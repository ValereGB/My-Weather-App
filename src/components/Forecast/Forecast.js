import React, { useState } from 'react';
import classes from './Forecast.module.css';
import Conditions from '../Conditions/Conditions';
const Forecast = () => {
    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }
        
        setError(false);
        setResponseObj({});
       
        setLoading(true);
       
        let uriEncodedCity = encodeURIComponent(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?lang=fr&units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "77f0eaa530mshbd755ddb56cdeacp13194djsn074e2b3d3958"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(response)
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    return (
        <div className={classes.Wrapper}>
            <h2>Informations liées à la Météo</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Choix de la ville"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Afficher votre Météo</button>
            </form>

            <Conditions
              responseObj={responseObj}
              error={error} 
              loading={loading} 
              />
        </div>
    )
}
export default Forecast;