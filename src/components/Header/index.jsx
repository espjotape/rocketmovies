import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth"

export function Header(){
  const { signOut } = useAuth()
  
  return(
    <Container>
      <h1>RocketMovies</h1>
    
      <div className="search">
        <input type="text" placeholder="Pesquisar pelo título"/>
      </div>
      
      <Profile to="/profile">
        <div>
          <strong>João Pedro</strong>
        </div>
        <img src="https://github.com/espjotape.png" alt="Foto do úsuario"/>
      </Profile>

      <Logout onClick={signOut}>sair</Logout>
    </Container>
  )
}