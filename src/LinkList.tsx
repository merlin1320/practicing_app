import './styles/styles.css'
import {useNavigate } from "react-router-dom";



const planets = ['Mercury', 'Venus', 'Earth','Mars','Jupiter','Saturn','Uranus', 'Neptune', 'Pluto']
const pokemon = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
const books = ['LOTR', 'SoT', 'Cradle', 'Percy Jackson', 'Halo', 'Legend of Drizzt']



export function LinkList() {
    const navigate = useNavigate();    
    return (
        <>
            <div className='linkslist'>
                <select onChange={(e)=>{
                        navigate(e.target.value)
                        }}>
                        <option value='Home'>Books</option>
                        {books.map((name)=>{return (<option value={`Books/${name}`} key={name}>{name}</option>)})}
                    </select>    
                    <select onChange={(e)=>{
                        navigate(e.target.value)
                        }}>
                            <option value='Home'>Planets</option>
                            {planets.map((name)=>{return (<option value={`Planets/${name}`} key={name}>{name}</option>)})}
                    </select>    
                    <select onChange={(e)=>{
                        navigate(e.target.value)
                        }}>
                            <option value='Home'>Pokemon</option>
                            {pokemon.map((name)=>{return (<option value={`Pokemon/${name}`} key={name}>{name}</option>)})}
                    </select>      
            </div>
        </>
    )
  }
  

  export default LinkList