import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("users", JSON.stringify(data));

    
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
  };

  
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/login'); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registrazione">
        <img src="src/assets/logo.svg" width={240} alt="logo" />
        <h3>Registrati</h3>
        
        <label>Nome:</label>
        <input
          type="text"
          name="nome" 
          value={data.nome}
          onChange={handleChange}
          placeholder="Inserisci il tuo nome..."
        />
        
        <label>Cognome:</label>
        <input
          type="text"
          name="cognome" 
          value={data.cognome}
          onChange={handleChange}
          placeholder="Inserisci il tuo cognome..."
        />
        
        <label>Email:</label>
        <input
          type="text"
          name="email" 
          value={data.email}
          onChange={handleChange}
          placeholder="Inserisci la tua Email..."
        />
        
        <label>Password:</label>
        <input
          type="password"
          name="password" 
          value={data.password}
          onChange={handleChange}
          placeholder="Inserisci la tua password..."
        />
        
        <button type="submit">Registrati</button>
        <button type="button" onClick={navigateTo}>Vai al Login</button>
      </form>
    </div>
  );
}
