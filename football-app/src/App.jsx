
import './App.css'
import { BundesLiga } from './componenti/Bundesliga';
import { Champions } from './componenti/Champions';
import { EuropaLeague } from './componenti/EuropaLeague';
import { Home } from './componenti/Home';
import { Login } from './componenti/Login';
import { Registrazione } from './componenti/Registrazione'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/registrazione' element= {<Registrazione></Registrazione>}></Route>
      <Route path='/login' element= {<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/champions' element={<Champions></Champions>}></Route>
      <Route path='/europa' element={<EuropaLeague></EuropaLeague>}></Route>
      <Route path='/bundes' element={<BundesLiga></BundesLiga>}></Route>



    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
