import { MenuButton } from "../MenuBotton";
import Container from "./styles";


export function Header () {
  return (  
  <Container>
    <div className="wrapper">
      <strong>Play the game</strong>
      <MenuButton />
    </div>
  </Container>
  )
};