import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function EuropaLeague() {
  const { data, error, isLoading } = useSwr('https://api.openligadb.de/getmatchdata/uel24/2024/7', fetcher);
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
      <h3>Partite UEL 2024</h3>


        
        {data.map((match)=>(
        <div className='table'>
            <div>
            <img src={match.team1.teamIconUrl} width={40} key={match.team1.teamId} alt={match.team1.shortName} />
        <p key={match.team1.teamId} >{match.team1.shortName}</p>

        </div>
        <p>vs</p>
        <div>
          <img src={match.team2.teamIconUrl} width={40} key={match.team2.teamId} alt={match.team2.shortName} />
          <p key={match.team2.teamId} >{match.team2.shortName}</p>  
        </div>
        </div>
        
      
    
     
    


      ))}
        

       
    </div>
  );
}
