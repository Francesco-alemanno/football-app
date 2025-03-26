import { useNavigate } from "react-router-dom";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function Champions() {
  const { data, error, isLoading, mutate } = useSwr(
    "https://api.openligadb.de/getmatchdata/ucl24/2024/11",
    fetcher
  );
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  if (error) {
    return <p>Errore nel fetching dati</p>;
  }
  if (isLoading) {
    return <p>Caricamento in corso</p>;
  }

  return (
    <div className="champions-home" style={{ backgroundColor: "#1A2D5A" }}>
      <button className="btn" onClick={navigateToHome}>
        Torna indietro
      </button>

      <h3 style={{ color: "white" }}>CHAMPIONS LEAGUE</h3>

      {data.map((match) => {
        <h3 key={match.matchID}>{match.group.groupName.toUpperCase()}</h3>;

        const risultato = match.matchResults.find(
          (result) => result.resultName === "Endergebnis"
        );

        if (!risultato) {
          return (
            <>
              <div className="champions">
                <div className="team1">
                  <div className="team1-container">
                    <img
                      src={match.team1.teamIconUrl}
                      width={150}
                      alt={match.team1.teamName}
                    />
                  </div>
                </div>

                <p>vs</p>

                <div className="team2">
                  <img
                    src={match.team2.teamIconUrl}
                    width={150}
                    alt={match.team2.teamName}
                  />
                </div>

                <p key={match.matchID}>Deve ancora essere giocata.</p>
                <p>{new Date(match.matchDateTime).toLocaleString()}</p>
              </div>
            </>
          );
        }

        return (
          <div key={match.matchID}>
            <div style={{ color: "white" }} className="match-description">
              <p>{match.leagueName}</p>
              <p>{match.group.groupName}</p>
              <p>{new Date(match.matchDateTime).toLocaleString()}</p>
            </div>

            <div className="champions">
              <div className="team1">
                <div className="team1-container">
                  <img
                    src={match.team1.teamIconUrl}
                    width={35}
                    alt={match.team1.teamName}
                  />
                </div>
              </div>

              <div className="results">
                <p>{risultato.pointsTeam1}</p>
                <p>:</p>
                <p>{risultato.pointsTeam2}</p>
              </div>

              <div className="team2">
                <img
                  src={match.team2.teamIconUrl}
                  width={35}
                  alt={match.team2.teamName}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
