//imports
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//import estilos
import './Section.css';
import './MyButton.css';

export const MyButton = ({ color, onClick, ids }) => {
    let clase = '';

    if (color === 'rojo') {
    clase = 'botonRojo';
    } else if (color === 'azul') {
    clase = 'botonAzul';
    } else if (color === 'amarillo') {
    clase = 'botonAmarillo';
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

