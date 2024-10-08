import { useState } from "react";

import { api } from "../../services/api"

import { Container, Form, Background } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiUser ,FiMail, FiLock } from "react-icons/fi"
import { FaArrowLeft } from "react-icons/fa";

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){ 
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else{
        alert("Não foi possivel cadastrar")
      }
    })

  }

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
          onChange={event => setName(event.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />    

          <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button title="Entrar" onClick={handleSignUp}/>

        <Link to="/">
          <FaArrowLeft />
          Voltar para o login
        </Link>
       </Form>

        <Background />
    </Container>
  )
}