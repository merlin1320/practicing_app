import './styles/App.css'; import './styles/styles.css'; import './index.css'
import { About } from './pages/About.tsx'; import Home from './pages/Home.tsx'; import NavBar from './NavBar.tsx'; import { ColorChange } from './ColorChange.tsx';
import { Route, Routes, useSearchParams } from "react-router-dom"; 
import Planets from './pages/Planets.tsx'; import Pokemon from './pages/Pokemon.tsx'; import Books from './pages/Books.tsx'; 
import { useEffect, useState } from 'react'; 



function App() {
  const [color, setColor] = useState('#242424');

  const [params] = useSearchParams();

  const updateColors = (newColor : string) => {
    setColor(newColor)
    document.body.style.backgroundColor = newColor;
  }
  
  useEffect (()=> {
    const c = params.get('theme')
    const val : string = c ?? '#242424';
    document.body.style.backgroundColor = val;
    setColor(val);
  }, [])

  return (
    <>
      <div id='page' style={{
        backgroundColor:color
      }}>
        <header className='navbar'><NavBar/></header>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='Home'element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='/Planets/:Planets' element={<Planets/>}/>
          <Route path='/Pokemon/:Pokemon' element={<Pokemon/>}/>
          <Route path='/Books/:Books' element={<Books/>}/>
          <Route path='*' element={<p>Fuck you wrong site</p>}/>
        </Routes>
        <ColorChange color = {color} setColor = {updateColors}/>
      </div>
    </>
  )
}

export default App
