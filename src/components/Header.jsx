//import './Header.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const Header = () => {
    return (
    <>
        <header className="flex flex-col   ">
        <div className="m-4 grid justify-items-center ">
            <img
            className="rounded  bg-red-200 m-4 justify-self-center p-2"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="logo"
            />
        </div>
        <nav class="flex justify-center space-x-4 bg-red-200 ">
            <a
            href="#"
            class="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900"
            >
            Home
            </a>
            <a
            href="#"
            class="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900"
            >
            Team
            </a>
            <a
            href="#"
            class="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900"
            >
            Page 3
            </a>
            <a
            href="#"
            class="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900"
            >
            Page 4
            </a>
        </nav>
        </header>
    </>
    );
};
