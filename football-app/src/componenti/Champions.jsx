import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function Champions() {
  const { data, error, isLoading } = useSwr('https://api.openligadb.de/getmatchdata/ucl2024/2024/1', fetcher);
const navigate= useNavigate()
const navigateToHome= ()=>{
    navigate('/home')}
  if (error) {
    return <p>Errore nel fetching dati</p>;
  }
  if (isLoading) {
    return <p>Caricamento in corso</p>;
  }

  return (
    <div className='champions-home'>
        <button className='btn' onClick={navigateToHome}>Torna indietro</button>
      <h3>Partite UCL 2024</h3>

      {data.map((match) => {
      
        const risultato = match.matchResults.find(
          (result) => result.resultName === 'Endergebnis'
        );

        
        if (!risultato) {
          return <p key={match.matchID}>Risultato finale non disponibile per questa partita.</p>;
        }

        return (
            
                 <div key={match.matchID} >
            <div className="match-description">
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
                <p>vs</p>
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
            <div className='marcatori'>
               {match.goals.map((goal)=>(
                <>
                <li key={goal.goalID}>
                Minuto: {goal.matchMinute}
              </li>

              <li key={goal.goalGetterID}>{goal.goalGetterName}</li>
              <hr />
                </>
                
              
               ))}
              </div>
          </div>
         
        );
      })}
    </div>
  );
}
