import { Container, Content, Avatar } from "./styles"

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { LuClock3  } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tags } from "../../components/Tags"
import { Section } from "../../components/Section"
import { Rating } from "../../components/Rating";


export default function Details(){
  const [ data, setData ] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  const { user } = useAuth();
  const avatarURL = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceholder;


  function handleBack(){
    navigate("/")
  } 

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNotes()
  }, [params.id])

  return(
    <Container>
      <Header/>
      { 
          data &&
        <main>
          <div>
            <Content>
              <ButtonText title="Voltar" onClick={handleBack}>
                <FaArrowLeft/> 
                Voltar
              </ButtonText>
              {
                data.tags && (
                  <section className="info">
                    <div>
                    <h1>{data.title}</h1>
                     <Rating grade={data.rating} isBigSize />
                    </div>
                  <Avatar>
                    <img src={avatarURL} alt="foto do úsuario"/>
                    <p>Por: {user.name}</p>
                    
                    <LuClock3 />
                    <p>23/05/22 às 08:00</p>
                  </Avatar>

                  {
                    data.tags.map(tag => (
                      <Tags 
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }
                  </section>
                )
              }

              <div className="text">
                {data.description}
              </div>
          <section className="btn">
                    <button className="delete" type="button"><p>Excluir filme</p></button>
                    <button className="save" type="button"><p>Editar Filme</p></button>
                  </section>
            </Content>
          </div>
      </main>
    }
    </Container>
  )
}