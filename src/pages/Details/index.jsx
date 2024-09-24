import { Container, Content, Avatar } from "./styles"

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { LuClock3  } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";

import moment from "moment-timezone";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tags } from "../../components/Tags"
import { Rating } from "../../components/Rating";


export default function Details(){
  //const [ data, setData ] = useState(null) - Se der ruim é assim que estava antes
  const [ data, setData ] = useState({})

  const navigate = useNavigate()
  const params = useParams()

  const { id } = useParams(); // Pega o id da URL

  const { user } = useAuth();
  const avatarURL = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceholder;

  const formattedDate = moment
  .utc(data.updated_at)
  .tz("America/Sao_Paulo")
  .format("DD/MM/YYYY HH:mm:ss")

  function handleEdit(){
    navigate(`/edit/${id}`)
  }

  function handleBack(){
    navigate(-1)
  } 

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNotes()
  }, [params.id])

  async function handleRemove(){
    const confirm = window.confirm("Você quer realmente remover essa nota")
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }

  }
  
  return(
    <Container>
      <Header/>
      { 
          data &&
        <main>
          <div>
            <Content>
            <header>
              <FaArrowLeft />
              <ButtonText onClick={handleBack} title="Voltar"/>
            </header>
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
                    <p>{formattedDate}</p>
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
                    <button onClick={handleRemove} className="delete" type="button"><p>Excluir filme</p></button>
                    <button onClick={handleEdit} className="save" type="button"><p>Editar Filme</p></button>
                  </section>
            </Content>
          </div>
      </main>
    }
    </Container>
  )
}