import React from 'react';
import Logo from './components/Logo/Logo';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <Logo/>
       <h1>Votre Météo en React</h1>
       <h2>Présenté par Valère</h2>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page créer par Valere GB
     </footer>
   </div>
 );
}
export default App;