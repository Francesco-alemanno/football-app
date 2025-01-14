import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function BundesLiga() {
  const { data, error, isLoading } = useSwr('https://api.openligadb.de/getmatchdata/bl1/2024/17', fetcher);
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
      <h3>Partite BundesLiga Giornata 7 2024</h3>


        
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
