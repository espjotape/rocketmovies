import { Container } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tags } from "../../components/Tags"

export default function Details(){
  return(
    <Container>
      <Header></Header>
      <ButtonText title="Voltar"/>
      <Tags title ="Ficção Científica"/>
    </Container>
  )
}