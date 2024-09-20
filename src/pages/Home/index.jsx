import { Container, Content, NewNote } from "./styles"

import { Header } from "./../../components/Header"
import { Input } from "./../../components/Input"
import { Note } from "./../../components/Note"

import { api } from "../../services/api"

import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Home(){
  
  const [ notes, setNotes ] = useState([])
  const [ search, setSearch ] = useState("")

  const navigate = useNavigate()

  //function handleDetails(id) {
  //  navigate(`/details/${id}`)
  //}

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    async function fetchNotes() {
      const response = await api.get(`/notes?user_id=${user_id}&title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return(
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <NewNote to="/new">
          <button type="button">
            <FiPlus />
             Adicionar Nota
            </button>
          </NewNote>
          <Content>
            <section>
              {
                notes.map(note => (
                  <Note
                    key={String(note.id)}
                    data={note}
                    onClick={() => (handleDetails(note.id))}
                  />
                ))
              }
              
            </section>
          </Content>
      </main>
    </Container>
  )
}