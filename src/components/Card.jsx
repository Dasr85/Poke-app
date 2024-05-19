//imports
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//import estilos
import './Card.css';
let URL = 'https://pokeapi.co/api/v2/pokemon/';

/*   fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data)); */
/*    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"> */

export const Card = ({ id }) => {
  //{id} es un objeto necesito un string para gregar a la url
  // fetch(URl +id )
  //console.log(Object.values({ id }));

  let name= ''
  let imagen =''
  let height= ''
  let weight =''
  //arrayData=[name,imagenURL,height,weight];
  const [pokeData, setpokeData] = useState([]);


    var uri = Object.values({ id });
    fetch(URL + uri)
    .then((response) => response.json())
    .then((data) => {setpokeData(mostrarPokemon(data))});

    function mostrarPokemon(poke) {
    //verificar de traer bien los tipos
    /* let tipos = poke.types.map((type) => {
        type.type.name;
    });
    tipos = tipos.join(''); */
    let name = poke.name;
    console.log(poke.name);
    let height = poke.height;
    console.log(poke.height);
    let weight = poke.weight;
    console.log(poke.weight);
    console.log(poke.sprites.other['official-artwork'].front_default);
    let imagen = poke.sprites.other['official-artwork'].front_default;

   

    return [name,imagen,height,weight];
}
console.log('aca')
console.log(pokeData)

    return (
    <>
      <div className='cardFrame'>
      <div className='cardTitle'>{pokeData[0]}</div>
      <div className="cardImage">
        <img src={pokeData[1]} alt="pokemon"/>
      </div>
      <div className="cardText">Peso: {pokeData[2]}</div>
      <div className="cardText">Altura: {pokeData[2]}</div>
      <div className="cardText">Id: #{id}</div>
    </div>
     
    </>
    );
};
