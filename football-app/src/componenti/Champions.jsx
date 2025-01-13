import useSwr from 'swr';

const fetcher= url=> fetch(url).then(response=>response.json())

export function Champions(){

const {data, error, isLoading}=useSwr('https://api.openligadb.de/getmatchdata/ucl2024/2024/1', fetcher)
    
if(error){
    return <p>Errore nel fetching dati</p>
}
if(isLoading){
    return <p>Caricamento in corso</p>
}
    return(
        <div>
<h3>Partite UCL 2024 </h3>
{data.map((match)=>(

    <div>
         
        <div className='match-description'>
            <p key={match.matchID}>{match.leagueName}</p>
            <p key={match.matchID}>{match.group.groupName}</p>
            <p key={match.matchID}>{new Date(match.matchDateTime).toLocaleString()}</p>
            </div>


   <div className='champions'>
        <div className='team1'>
<div className='team1-container'>
<img src={match.team1.teamIconUrl} width={35} alt={match.team1.teamName} />
         <p key={match.team1.teamId}>{match.team1.shortName}</p>
</div>
         
     </div>
 
     <div className='results'>
        
     <p key={match.matchResults.find((result)=>result.resultName==='Endergebnis')}>{match.matchResults.pointsTeam1}</p>
 <p>vs</p>
 <p key={match.matchResults.find((result)=>result.resultName==='Endergebnis')}>{match.matchResults.pointsTeam2}</p>
     </div>
     
 <div className='team2'>
 <img src={match.team2.teamIconUrl} width={35} alt={match.team2.teamName} />
 <p key={match.team2.teamId}>{match.team2.shortName}</p>
 
 </div>
 
 
 
     </div>
     
 
    </div>
 
))}


        </div>
    )
}