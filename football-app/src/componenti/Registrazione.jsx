import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  const [errore, setErrore] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

 const navigate=useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      if (
        value.length < 6 ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()]/.test(value)
      ) {
        setErrore(
          "La password deve contenere almeno sei caratteri di cui almeno un carattere speciale e una lettera maiuscola"
        );
      } else {
        setErrore("");
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("users", JSON.stringify(data));

    navigate('/login')
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
  };

  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
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
        
        {errore && <p style={{ color: "red" }}> {errore}</p>}
        {errorEmail && <p style={{ color: "red" }}> {errorEmail}</p>}
        <button onClick={Navigate('/login')} disabled={errore ? true : false} type="submit">
          {" "}
          Registrati
        </button>
        <p>Hai già un account? <Link to={'/login'}>Login</Link></p>
      </form>
    </div>
  );
}
