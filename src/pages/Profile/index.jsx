import { Container, Form ,Avatar, Return } from "./styles";

import { FiArrowLeft, FiCamera ,FiUser,FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
  return(
    <Container>

      <header>
        <Return to="/">
          <FiArrowLeft />
          <p to="/">Voltar</p>
        </Return>
      </header>

      <Avatar>
        <img src="https://github.com/espjotape.png" alt="foto de úsuario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id="avatar"
          type="file" />
        </label>
      </Avatar>

      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="email" icon={FiMail}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova Senha" type="password" icon={FiLock}/>
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}