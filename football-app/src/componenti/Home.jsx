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

        <div className="cl-home">
  <img src="src/assets/champions.svg" width={50} alt="champions league" />
  <Link to={'/champions'}>Scopri i risultati della Uefa Champions League!</Link> 
  
</div>
      </div>
    )
  }