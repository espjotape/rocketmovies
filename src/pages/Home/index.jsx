import { Container, Content, NewNote } from "./styles"

import { Header } from "./../../components/Header"
import { Note } from "./../../components/Note"


import { FiPlus } from "react-icons/fi"

export function Home(){
  return(
    <Container>
      <Header />
      <main>
        <NewNote>
         <button>
          <FiPlus />
             Adicionar Nota
          </button>
          </NewNote>
        <div>
          <Content>
           <Note data={{ 
              title: 'Interrestelar', 
              paraghaph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro...',
              tags: [
                { id : '1' , name: 'Ficção Científica'},
                { id : '2' , name: 'Ação'},
              ]
              }}
            />
            <Note data={{ 
                title: 'Interrestelar', 
                paraghaph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro...',
                tags: [
                  { id : '1' , name: 'Ficção Científica'},
                  { id : '2' , name: 'Ação'},
                ]
              }}
            />
            <Note data={{ 
                title: 'Interrestelar', 
                paraghaph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro...',
                tags: [
                  { id : '1' , name: 'Ficção Científica'},
                  { id : '2' , name: 'Ação'},
                ]
            }}
          />
          </Content>
        </div>
      </main>
    </Container>
  )
}