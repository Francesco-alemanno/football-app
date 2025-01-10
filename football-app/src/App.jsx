
import './App.css'
import { Home } from './Home';
import { Login } from './Login';
import { Registrazione } from './Registrazione'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     
    {/* <BrowserRouter>
  <Home></Home>
    <Routes>
      <Route path='/registrazione' element= {<Registrazione></Registrazione>}></Route>
      <Route path='/login' element= {<Login></Login>}></Route>

    </Routes>
    
    </BrowserRouter> */}
    <Home></Home>

    </>
  )
}

export default App
