import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
    
      <div className="search">
        <input type="text" placeholder="Pesquisar pelo título"/>
      </div>
      
      <Profile>
        <div>
          <strong>João Pedro</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/espjotape.png" alt="Foto do úsuario"/>
      </Profile>
    </Container>
  )
}