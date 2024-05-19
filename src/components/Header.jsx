
import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/img/Logo.png'

import './Header.css';

export const Header = () => {
    return (
    <>
        <header className="estilo__header container">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <nav >
            <ul className="estilo__navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/pokemonlist">Lista de Pokemon</a></li>
            </ul>
            
            {/* <a href="#">Page 3</a>
            <a href="#">Page 4</a> */}
        </nav>
        </header>
    </>
    );
};
