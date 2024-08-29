import { Container } from "./styles";

export function TagsHome({ title, ...rest }){
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}