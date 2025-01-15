import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  


  const handleSubmit = (event) => {
    event.preventDefault();

    
    const userExist = localStorage.getItem("users");
    

    if (userExist) {
      const parsedUsers = JSON.parse(userExist); 
      
      
      if (parsedUsers.email === data.email && parsedUsers.password === data.password) {
        alert('Accesso consentito');
        navigate('/home')
      } else {
        alert('Accesso negato');
      }
    } else {
      alert('Nessun utente trovato');
    }
const user= localStorage.setItem('user', userExist)
   
    setData({
      email: "",
      password: "",
    });
  };
 

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <img src="src/assets/logo.svg" width={240} alt="logo" />
        <h3>Login</h3>
        
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Inserisci la tua Email..."
        />
        <label> Password:</label>
        <input
          type="password"
          name="password" 
          value={data.password}
          onChange={handleChange}
          placeholder="Inserisci la tua password..."
        />
        <button type="submit">Login</button>
        <p>Non sei ancora registrato? <Link to={'/registrazione'}>Registrati!</Link></p>
      </form>
    </div>
  );
}
