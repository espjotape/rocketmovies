import { Link } from "react-router-dom";
import { useState } from "react";

import { Container, Content, Footer } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"

import { FaArrowLeft } from "react-icons/fa";

export function New(){
  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  return(
    <Container>
      <Header />
      <main>
        <section>
          <Content>
            <Link to="/" className="btn">
                <FaArrowLeft />
                <ButtonText title="Voltar" />
            </Link>
              <h1>Novo Filme</h1>
              <section>
                <Input type="text" placeholder="Titulo"/>
                <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
              </section>
              <Textarea placeholder="Observações"/>
              
              <Footer>
                  <h3>Marcadores</h3>
                  <div className="tags">

                  {
                    tags.map((link, index) => (

                      <NoteItem 
                        //isNew
                        key={String(index)}
                        placeholder="Novo Link" 
                        value={link}
                        onClick={() => { }}
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
                    <button className="delete"><p>Excluir filme</p></button>
                    <button className="save"><p>Salvar alterações</p></button>
                  </section>
              </Footer>
          </Content>

        </section>
      </main>
    
    </Container>
  )
}