// import {About} from './pages/About'
// import {Home} from './pages/Home'
import "./styles/styles.css";
import { Link } from "react-router-dom";

// import React from "react";

  const planets = ['Mercury', 'Venus', 'Earth','Mars','Jupiter','Saturn','Neptune']
  
  const pokemon = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
  
  const books = ['LOTR', 'SoT', 'Cradle', 'Percy Jackson', 'Halo', 'Legend of Drizzt']
  
  export function NavBar() {
    return (
      <div className="navbar-container">

      <Link to='Home'>Home</Link>
      <Link to='About'>About</Link>
      
      {books.map((name)=>{        
        return (<Link to={`Books/${name}`}>{name}</Link>)})}
      {planets.map((name)=>{        
        return (<Link to={`Planets/${name}`}>{name}</Link>)})}
      {pokemon.map((name)=>{        
        return (<Link to={`Pokemon/${name}`}>{name}</Link>)})}
    </div>
  )
}

export default NavBar
