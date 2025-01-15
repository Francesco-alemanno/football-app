import { Link } from "react-router-dom"

export function Home(){
const userName=localStorage.getItem('user')
const userNameParse=JSON.parse(userName)

    return(
      <div>
        {/* ---------------------------------- */}
        <div className="nav-home">
          <img src="src/assets/logo.svg" width={50} alt="" />
          <p>SoccerZone</p>
  
          <div className="nav-utente">
          <img src="src/assets/iconaUtente.svg" width={20} alt="icona" />
<p>{userNameParse.nome.toUpperCase()} {userNameParse.cognome.toUpperCase()}</p>
          </div>

          {/* ----------------------------------- */}
        </div>
<div className="input-results">
        <div className="cl-home">
  <img src="src/assets/champions.svg" width={50} alt="champions league" />
  <Link className="link" to={'/champions'}>Scopri i risultati della Uefa Champions League!</Link> 
  
</div>

<div className="cl-home">
  <img src="src/assets/EL.svg" width={50} alt="champions league" />
  <Link className="link" to={'/europa'}>Scopri i risultati della Uefa Europa League! </Link> 
  
</div>
<div className="cl-home">
  <img src="src/assets/Bundesliga.svg" width={50} alt="champions league" />
  <Link className="link" to={'/bundes'}>Scopri i risultati della BundesLiga!</Link> 
  
</div>
<div className="cl-home">
  <img src="src/assets/DFB.svg" width={50} alt="champions league" />
  <Link className="link" to={'/pokal'}>Scopri i risultati della Dfb pokal! </Link> 
  
</div>
</div>
      </div>
    )
  }