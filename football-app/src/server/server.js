import express, { json } from 'express';
import cors from 'cors';
import { getAllUsers, login, registrazione, userLogged } from './controllers.js';

const app= express()
const PORT= 5001;
// middleware
app.use(
    cors({
      origin: "*", // 🔴 Prova con "*" per accettare richieste da qualsiasi origine
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, 
    })
  );
  

app.use(json())

// CHIAMATE
app.get('/users', getAllUsers)
app.post('/registrazione', registrazione)

// login
app.post('/login', login)


// home
app.get('/home/:userId', userLogged)

app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });

// listener
app.listen(PORT, ()=>{
    console.log(`Server in ascolto su http://localhost:${PORT}`)
})