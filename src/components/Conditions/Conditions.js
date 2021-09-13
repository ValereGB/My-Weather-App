import React from 'react';
import classes from './Conditions.module.css'
const Conditions = (props) => {
   return (
    <div className={classes.Wrapper}>
        {props.error && <small>Entrez un nom de ville valide.</small>}
           {props.loading && <div>Patientez...</div>}
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>Il faut au minimum {Math.round(props.responseObj.main.temp_min)} degrees 
                   et au maximum {Math.round(props.responseObj.main.temp_max)} degrees.
                   De plus le vent souffle à {Math.round(props.responseObj.wind.speed)} km/h. 
                   La direction du vent est de {Math.round(props.responseObj.wind.deg)} degrees</p>
                   <p>Temps aperçu : <strong>{props.responseObj.weather[0].description}</strong></p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;