import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [utenteLoggato, setUtenteLoggato] = useState("");
  const userId = localStorage.getItem("userId");
  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:5001/home/${userId}`);

      const responseData = await response.json();

      setUtenteLoggato(responseData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  return (
    <div>
      {/* ---------------------------------- */}
      <div className="nav-home">
        <img src="/logo.svg" alt="" />
        <p>SoccerZone</p>

        <div className="nav-utente">
          <img src="/iconaUtente.svg" width={20} alt="icona" />
          <p>
            {utenteLoggato?.nome?.toUpperCase()}{" "}
            {utenteLoggato?.cognome?.toUpperCase()}
          </p>
        </div>
        <div>
          <Link to={"/login"} onClick={handleLogout}>
            {" "}
            <button className="logout-btn">Logout</button>
          </Link>
        </div>

        {/* ----------------------------------- */}
      </div>
      <div className="input-results">
        <div className="cl-home">
          <img src="/champions.svg" alt="champions league" />
          <Link className="link" to={"/champions"}>
            Scopri i risultati della Uefa Champions League!
          </Link>
        </div>

        <div className="cl-home">
          <img src="/EL.svg" alt="champions league" />
          <Link className="link" to={"/europa"}>
            Scopri i risultati della Uefa Europa League!{" "}
          </Link>
        </div>
        <div className="cl-home">
          <img src="/Bundesliga.svg" alt="bundesliga " />
          <Link className="link" to={"/bundes"}>
            Scopri i risultati della BundesLiga!
          </Link>
        </div>
        <div className="cl-home">
          <img src="/DFB.svg" alt="Dfb pokal" />
          <Link className="link" to={"/pokal"}>
            Scopri i risultati della Dfb pokal!{" "}
          </Link>
        </div>
        <div className="cl-home">
          <img src="/nations-league.svg" alt="Nations League" />
          <Link className="link" to={"/nationsleague"}>
            Scopri i risultati della Nations League!{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
