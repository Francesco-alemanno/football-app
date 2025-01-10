
import './App.css'
import { Home } from './Home';
import { Login } from './Login';
import { Registrazione } from './Registrazione'
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


    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
