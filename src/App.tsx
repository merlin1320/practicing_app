import './styles/App.css'; import './styles/styles.css'; import './index.css'
import { About } from './pages/About.tsx'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';
import Planets from './pages/Planets.tsx'
import Pokemon from './pages/Pokemon.tsx'
import Books from './pages/Books.tsx'

const colors = ['Red','Blue','Green','Pink','Yellow','Black','White']
let color = '#242424'
let setcolor = '#242424'
function App() {

  return (
    <>
      <header className='navbar'><NavBar/></header>
      <div>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Home'element={<Home/>}/>
          <Route path='/Planets/:Planets' element={<Planets/>}/>
          <Route path='/Pokemon/:Pokemon' element={<Pokemon/>}/>
          <Route path='/Books/:Books' element={<Books/>}/>
          <Route path='*' element={<p>Fuck you wrong site</p>}/>
        </Routes>
      </div>
      <div className='colorchange'>
        <div>
          <select onChange={(e) => {color = e.target.value}}>
            <option >Color Selection</option>
            <option value={'#242424'}>Default</option>
            {colors.map((name) => {return (<option value={name} key={name}>{name}</option>)})}
          </select>
          <button onClick={()=> {document.body.style.backgroundColor = color}}>Select Color Here</button>
        </div>
        <div>
          <p>Enter your own color here: </p>
          <input onChange={(e)=>{setcolor = e.target.value}} id='colortext' type='text'/>
          <button onClick={()=> {document.body.style.backgroundColor = setcolor}}> Submit </button>
        </div>
      </div>
    </>
  )
}

export default App