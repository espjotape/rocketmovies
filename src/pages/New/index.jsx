import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content, Footer } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"

import { FaArrowLeft } from "react-icons/fa";

export function New(){
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const [ rating, setRating ] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){

    if (!title) {
      return alert("Digite um título para a nota!");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.", { autoClose: 10000 });
    }


    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  function handleBack(){
    navigate(-1)
  } 

  return(
    <Container>
      <Header />
      <main>
        <section>
          <Content>
            <header>
                <FaArrowLeft />
                <ButtonText onClick={handleBack} title="Voltar"/>
            </header>
              <h1>Novo Filme</h1>
              <section>
                <Input
                  placeholder="Titulo" 
                  onChange={e => setTitle(e.target.value)}
                />
                <Input 
                  type="number" 
                  placeholder="Sua nota (de 0 a 5)"
                  min="0"
                  max="5"
                  value={rating}
                  onChange={e => setRating(e.target.value)}
                />
              </section>
              <Textarea 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
              />
              
              <Footer>
                  <h3>Marcadores</h3>
                  <div className="tags">

                  {
                    tags.map((tag, index) => (
                      <NoteItem 
                        key={String(index)}
                        placeholder="Novo Link" 
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    )
                )}
                  <NoteItem 
                  isNew
                  placeholder="Novo Link" 
                  value={newTag}
                  onChange={e => setNewTag (e.target.value)}
                  onClick={handleAddTag}
                  />

                  </div>
                  <section>
                    <button onClick={handleBack} className="delete" type="button"><p>Descartar Alterações</p></button>
                    <button onClick={handleNewNote} className="save" type="button"><p>Salvar alterações</p></button>
                  </section>
              </Footer>
          </Content>

        </section>
      </main>
    
    </Container>
  )
}