import './styles/App.css'
import './styles/styles.css'
import { About } from './pages/About.tsx'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';

function App() {


  return (
    <>
      <div>
        <header className='heading'><NavBar /></header>
      </div>
      <div>
        {/* <a href='./About.tsx'>About Me</a> */}
        {/* <Link to='About' className='navbutton'>About</Link>
        <Link to='Home' className='navbutton'>Home</Link> */}
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Home'element={<Home/>}/>
        </Routes>
      </div>

      
    </>
  )
}

export default App