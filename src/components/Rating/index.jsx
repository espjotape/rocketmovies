import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Rating({ grade, isbigSize }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      stars.push(<VscStarFull key={i} />);
    } else {
      stars.push(<VscStarEmpty key={i} />);
    }
  }

  return <Container isBigSize={isbigSize}>{stars}</Container>;
}