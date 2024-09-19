import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api";

export function Header(){
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  return(
    <Container>
      <h1>RocketMovies</h1>
    
      <div className="search">
        <input type="text" placeholder="Pesquisar pelo título"/>
      </div>
      
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarUrl} alt={user.name}/>
      </Profile>

      <Logout onClick={signOut}>sair</Logout>
    </Container>
  )
}