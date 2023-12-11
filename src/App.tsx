import './styles/App.css'
import './styles/styles.css'
import { About } from './pages/About.tsx'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';
import Planets from './pages/Planets.tsx'
import Pokemon from './pages/Pokemon.tsx'
import Books from './pages/Books.tsx'

function App() {

  return (
    <>
    {/* <div> */}

     <nav>
      <header className='navbar'><NavBar/></header>
      </nav> 
    <body>
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
    </body>
    {/* </div> */}
    </>
  )
}

export default App

