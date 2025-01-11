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
    <div className='champions'>
       <div className='team1'>
        <img src={match.team1.teamIconUrl} width={40} alt={match.team1.teamName} />
<p key={match.team1.teamId}>{match.team1.teamName}</p>
    </div>

<div className='team2'>
<img src={match.team2.teamIconUrl} width={40} alt={match.team2.teamName} />
<p key={match.team2.teamId}>{match.team2.teamName}</p>
</div>
    </div>
 
))}


        </div>
    )
}