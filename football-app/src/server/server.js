import express, { json } from 'express';
import cors from 'cors';
import { getAllUsers, login, registrazione, userLogged } from './controllers.js';

const app= express()
const PORT= 5001;
// middleware
app.use(cors())
app.use(json())

// CHIAMATE
app.get('/users', getAllUsers)
app.post('/registrazione', registrazione)

// login
app.post('/login', login)


// home
app.get('/home/:userId', userLogged)



// listener
app.listen(PORT, ()=>{
    console.log(`Server in ascolto su http://localhost:${PORT}`)
})