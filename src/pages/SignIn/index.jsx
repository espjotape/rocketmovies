import { useContext } from "react";
import { MyContext } from "../../myContext";

import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiMail, FiLock } from "react-icons/fi"

export function SignIn(){
  const data = useContext(MyContext)
  console.log("MEU CONTEXTO =>", data)

  return(
    <Container>
       <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
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

        <Link to="/register">
          Criar conta
        </Link>
       </Form>

        <Background />
    </Container>
  )
}