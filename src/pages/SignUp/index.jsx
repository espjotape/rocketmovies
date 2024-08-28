import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiUser ,FiMail, FiLock } from "react-icons/fi"
import { FaArrowLeft } from "react-icons/fa";

export function SignUp(){
  return(
    <Container>
       <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Criar conta</h2>
          <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />    

          <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>

        <a href="#">
          <FaArrowLeft />
          Voltar para o login
        </a>
       </Form>

        <Background />
    </Container>
  )
}