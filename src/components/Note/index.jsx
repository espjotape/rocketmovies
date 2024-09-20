import { Container } from "./styles.js"
import { TagsHome } from "../TagsHome"
import { Rating } from "../Rating/index.jsx"

export function Note({ data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      
      <Rating grade={data.rating} isbigSize={false}/>

      <p>{data.paraghaph}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => 
            <TagsHome
              key={tag.id} 
              title={tag.name} 
            />)
          }
        </footer>
      }
    </Container>
  )
}