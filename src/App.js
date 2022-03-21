import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const DistrictStyle = {
  backgroundColor:"red",
  margin:"20px",
  borderRadius:"20px",
  padding:"20px"
}

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <District name="noakhali" special="manush"></District>
      <District name="Feni" special="khaowa"></District>
      <District name="comilla" special="kipta"></District>
      <District name="chandpur" special="hilsha"></District>
    </div>
  );
}

function District(props){
  const [power, setPower] = useState(1)
  const increasePower= ()=> {
    setPower(power*2)
  }
  return (
    <div style={DistrictStyle}>
      <h1>Name:{props.name}</h1>
      <h4>special:{props.special}</h4>
      <h5>power:{power}</h5>
      <button onClick={increasePower}>Kick Me</button>
    </div>
  )
}
// 3-20-22
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect( () => {
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every country of the world!!!</h1>
//       <h3>Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//  return (<h4>Country:{props.name}</h4>)
// }
export default App;
