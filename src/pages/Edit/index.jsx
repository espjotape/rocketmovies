import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Adiciona o useParams
import { api } from "../../services/api";

import { Container, Content, Footer } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { FaArrowLeft } from "react-icons/fa";

export function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); // Pega o id da URL

  function validator() {
    if (!title) {
      alert("Digite um título para a nota!");
      return false;
    }
  
    if (newTag) {
      alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
      return false;
    }
  
    return true; // Se todas as validações passarem
  }
  

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleSave() {
    const passedValidation = validator();

    if (passedValidation) {
      try {
        await api.put(`/notes/${id}`, { title, description, rating, tags }); // Usa o id de useParams
        alert("Filme editado com sucesso!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o filme");
          console.log(error);
        }
      }
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <section>
          <Content>
            <header>
              <FaArrowLeft />
              <ButtonText onClick={handleBack} title="Voltar" />
            </header>
            <h1>Novo Filme</h1>
            <section>
              <Input placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} />
              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </section>
            <Textarea placeholder="Observações" onChange={(e) => setDescription(e.target.value)} />

            <Footer>
              <h3>Marcadores</h3>
              <div className="tags">
                {tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    placeholder="Novo Link"
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <NoteItem
                  isNew
                  placeholder="Novo Link"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
              <section>
                <button onClick={handleBack} className="delete" type="button">
                  <p>Descartar Alterações</p>
                </button>
                <button onClick={handleSave} className="save" type="button">
                  <p>Salvar alterações</p>
                </button>
              </section>
            </Footer>
          </Content>
        </section>
      </main>
    </Container>
  );
}
