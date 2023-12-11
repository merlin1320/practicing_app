// import {About} from './pages/About'
// import {Home} from './pages/Home'
import "./styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {LinkList} from './LinkList' 

// import React from "react";

  const planets = ['Mercury', 'Venus', 'Earth','Mars','Jupiter','Saturn','Uranus', 'Neptune', 'Pluto']
  const pokemon = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
  const books = ['LOTR', 'SoT', 'Cradle', 'Percy Jackson', 'Halo', 'Legend of Drizzt']
  
  export function NavBar() {
    const navigate = useNavigate();
    let element = document.getElementById('LinkListID')

    return (
      <div >

        <div className="links">
          <Link to='Home'>Home</Link>
          <Link to='About'>About</Link>
          <Link to='GoldCounter'>Gold Counter</Link>

        </div>
      {/* {books.map((name)=>{        
        return (<Link to={`Books/${name}`}>{name}</Link>)})}
      {planets.map((name)=>{        
        return (<Link to={`Planets/${name}`}>{name}</Link>)})}
        {pokemon.map((name)=>{        
        return (<Link to={`Pokemon/${name}`}>{name}</Link>)})} */}
        <div className="navbar-container">
          <input type='checkbox' id='LinkListID'/>
          
          {/* <select onChange={(e)=>{
            navigate(e.target.value)
          }}>
            <option value='Home'>Books</option>
            {books.map((name)=>{  
              return (<option value={`Books/${name}`} key={name}>{name}</option>)})}
          </select>    
          <select onChange={(e)=>{
            navigate(e.target.value)
          }}>
            <option value='Home'>Planets</option>
            {planets.map((name)=>{  
              return (<option value={`Planets/${name}`} key={name}>{name}</option>)})}
          </select>    
          <select onChange={(e)=>{
            navigate(e.target.value)
          }}>
            <option value='Home'>Pokemon</option>
            {pokemon.map((name)=>{  
              return (<option value={`Pokemon/${name}`} key={name}>{name}</option>)})}
          </select>       */}
        </div>
    </div>
  )
}

export default NavBar
