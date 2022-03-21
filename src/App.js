import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every country of the world!!!</h1>
      <h3>Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common}></Country>)
      }
    </div>
  )
}

function Country(props){
 return (<h4>Country:{props.name}</h4>)
}
export default App;
