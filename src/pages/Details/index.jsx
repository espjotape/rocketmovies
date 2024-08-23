import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Tags } from "../../components/Tags"

export default function Details(){
  return(
    <Container>
      <Header></Header>
      <Tags title ="Ficção Científica"/>
    </Container>
  )
}