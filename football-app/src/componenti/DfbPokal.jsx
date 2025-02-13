import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function DfbPokal() {
  const { data, error, isLoading,mutate } = useSwr('https://api.openligadb.de/getmatchdata/dfb/2024/4', fetcher);
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
      
     
        <h3>Partite DFB  2024</h3>
      {data.map((match) => {
      
        const risultato = match.matchResults.find(
          (result) => result.resultName === 'Endergebnis'
        );

        
        if (!risultato) {
          return (
            <>
            <h3 key={match.matchID}>{match.group.groupName.toUpperCase()}</h3>
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

                <p>vs</p>

                <div className="team2">
                <img
                  src={match.team2.teamIconUrl}
                  width={35}
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
            <div className="marcatori">
              {match.goals.map((goal) => (
                <>
                {goal.matchMinute ? <li key={goal.goalID}>Minuto: {goal.matchMinute}</li> : null
}
                  {goal.goalGetterID ? (
                    <li key={goal.goalGetterID}>{goal.goalGetterName}</li>
                  ) : (
                    <p>Marcatori non disponibili</p>
                  )}

                  <hr />
                </>
              ))}
            </div>
          </div>
         
        );
      })}
    </div>
  );}