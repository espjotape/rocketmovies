import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Container, Content, NewMovie } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    async function fetchNotes() {
      const response = await api.get(`/notes?user_id=${user_id}&title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <header>
          <h1>Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

        <Content>
          <section>
          {
            notes.length === 0 ? (
              <h2>Nenhum filme adicionado</h2>
            ) : (
              notes.map((note) => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            )}
         
            
          </section>
        </Content>
      </main>
    </Container>
  );
}