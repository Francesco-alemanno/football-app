import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

// Lista degli origin permessi
const allowedOrigins = [
  "https://football-3kait4isd-francescos-projects-949cebc9.vercel.app",
  "https://football-p3pjfzag0-francescos-projects-949cebc9.vercel.app",
  "https://football-n47c5tauz-francescos-projects-949cebc9.vercel.app",
  "http://localhost:5174"
];

// Middleware CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS non permesso per questo dominio"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Risolvere il problema delle richieste OPTIONS
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

// Middleware per JSON
app.use(express.json());

// Importa le funzioni controller
import { getAllUsers, login, registrazione, userLogged } from "./controllers.js";

// Definizione delle route
app.get("/users", getAllUsers);
app.post("/registrazione", registrazione);
app.post("/login", login);
app.get("/home/:userId", userLogged);

// Avvia il server
app.listen(PORT, () => {
  console.log(`✅ Server in ascolto su http://localhost:${PORT}`);
});
