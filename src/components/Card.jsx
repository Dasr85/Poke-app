//imports
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//import estilos
//import './Card.css';
let URL = 'https://pokeapi.co/api/v2/pokemon/';

/*   fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data)); */

/*    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"> */

export const Card = ({ id }) => {
  //{id} es un objeto necesito un string para gregar a la url
  // fetch(URl +id )
  //console.log(Object.values({ id }));
    var uri = Object.values({ id });
    fetch(URL + uri)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));

    function mostrarPokemon(poke) {
    //verificar de traer bien los tipos
    /* let tipos = poke.types.map((type) => {
        type.type.name;
    });
    tipos = tipos.join(''); */

    //console.log(tipos);

    console.log(poke.sprites.other['official-artwork'].front_default);
    let imagen = poke.sprites.other['official-artwork'].front_default;
}

  /* <img src="${poke.sprites.other['official-artwork'].front_default}" alt="${poke.name}"> */
/* var imageURL = data.sprites.other['official-artwork'].front_default;
  console.log(imageURL); */

    return (
    <>
        <div className="max-w-48 rounded overflow-hidden shadow-lg shadow-blue-900/50 border-slate-300 border">
        <img className="w-full " src="" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Name</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            type 1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            type 2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{id}
            </span>
        </div>
        </div>
    </>
    );
};
