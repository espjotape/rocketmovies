import { Container, Form ,Avatar, Return } from "./styles";

import { useAuth } from "../../hooks/auth"

import { useState } from 'react'
import { FiArrowLeft, FiCamera ,FiUser,FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
  const { user } = useAuth()

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

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
        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder="E-mail" type="email" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}