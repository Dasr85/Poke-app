import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
//import './App.css'
import { Header } from './components/Header.jsx';
import { Section } from './components/Section.jsx';
import { arrayIds } from './utils/randomld.js';

//console.log(arrayIds());

function App() {
  //const [count, setCount] = useState(0)
  let URL = 'https://pokeapi.co/api/v2/pokemon/';

  /*   fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data)); */

  return (
    <>
      <Header />
      <Section />
    </>
  );
}

export default App;