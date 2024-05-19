import {BrowserRouter,Routes,Route,Link} from "react-router-dom"; 
import { Home } from "./pages/Home.jsx";
import { Pokedetalles } from "./pages/Pokedetalles.jsx"; 
import { Pokemones } from './pages/Pokemones.jsx';
// import "./App.css"

export const App = ()  =>{

  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = { <Home/>} />
    <Route path = "/detalles/:Id" element = { <Pokedetalles/>}/>
    <Route path = "/pokemonlist" element = { <Pokemones/>}/>
    </Routes>
    </BrowserRouter>
  )
}