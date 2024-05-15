
import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/img/PokéApp_Logo.png'

import './Header.css';

export const Header = () => {
    return (
    <>
        <header className="estilo__header container">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <nav className="estilo__navbar">
            <a href="#">Home</a>
            <a href="#">Team</a>
            <a href="#">Page 3</a>
            <a href="#">Page 4</a>
        </nav>
        </header>
    </>
    );
};
