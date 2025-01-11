
import './App.css'
import { Champions } from './componenti/Champions';
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



    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
