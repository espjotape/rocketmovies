import { Container } from "./styles.js"
import { Tags } from "../Tags"
import { Rating } from "../Rating/index.jsx"

export function Note({ data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      
      <p>{data.paraghaph}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => 
            <Tags
            key={tag.id} 
            title={tag.name} 
            />)
          }
        </footer>
      }
    </Container>
  )
}