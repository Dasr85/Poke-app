//imports
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//import estilos
//import './Section.css';

export const MyButton = ({ color, onClick, ids }) => {
    let clase = '';

    if (color === 'rojo') {
    clase = 'rounded bg-red-200 p-2 ';
    } else if (color === 'azul') {
    clase = 'rounded bg-blue-200 p-2';
    } else if (color === 'amarillo') {
    clase = 'rounded bg-yellow-200 p-2';
    } else {
    clase = 'rounded bg-slate-200 p-2';
    }
    return (
    <>
        <div>
        <button className={clase} onClick={onClick}>
            Team {color}
        </button>
        </div>
    </>
    );
};