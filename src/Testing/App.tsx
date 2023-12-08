import './App.css'
import { About } from './About.tsx'
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home.tsx';

function App() {


  return (
    <>
      <div>
        {/* <a href='./About.tsx'>About Me</a> */}
        <Link to='About'>About</Link>
        <Link to='Home'>Home</Link>
        <Routes>
          <Route path='Home'element={<Home/>}/>
          <Route path='About' element={<About/>}/>
        </Routes>
      </div>

      
    </>
  )
}

export default App