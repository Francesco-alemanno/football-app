import express, { json } from "express";
import cors from "cors";
import {
  getAllUsers,
  login,
  registrazione,
  userLogged,
} from "./controllers.js";

const app = express();
const PORT = 5001;
// middleware
const allowedOrigins = [
    'https://football-3kait4isd-francescos-projects-949cebc9.vercel.app',
    'https://football-p3pjfzag0-francescos-projects-949cebc9.vercel.app',
    'http://localhost:5174'
  ];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// 2. Middleware CORS per tutte le routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(json());

// CHIAMATE
app.get("/users", getAllUsers);
app.post("/registrazione", registrazione);

// login
app.post("/login", login);

// home
app.get("/home/:userId", userLogged);

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// listener
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
