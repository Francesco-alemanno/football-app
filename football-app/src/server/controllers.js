import pgPromise from "pg-promise";
import { db } from "./initDB.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await db.manyOrNone(`SELECT * FROM users`);
    if (!users) {
      res.status(400).json({ message: "utenti non trovati" });
      return;
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "errore nel server" });
  }
};

export const registrazione = async (req, res) => {
  const { nome, cognome, email, password } = req.body;
  try {
    const registrazione = await db.none(
      "INSERT INTO users (nome, cognome, email, password) VALUES($1,$2,$3,$4)",
      [nome, cognome, email, password]
    );

    res.status(200).json({ message: "registrazione andata a buon fine" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.oneOrNone(
      `SELECT id, email, password FROM users WHERE email=$1 AND password=$2`,
      [email, password]
    );
    if (user.email != email || user.password != password) {
      res.status(400).json({ message: "credenziali errate" });
      return;
    }
    res.status(200).json({ message: "login effettuato con successo", userId:user.id }, );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// utente loggato
export const userLogged= async (req,res) => {
    const {userId}=req.params;
    try {
       const user= await db.oneOrNone(`SELECT * FROM users WHERE id=$1`, userId)
       if(!user){
        res.status(400).json({message:'utente non trovato o inesistente'})
        return
       }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}