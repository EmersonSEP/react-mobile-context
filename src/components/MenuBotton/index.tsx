import { FaGamepad } from 'react-icons/fa'
import { Button } from './styles'

import { MainContext } from "../../App"

export function MenuButton (){
  return (
    <MainContext.Consumer>
{ ({ handelTogglemenu}) => (
      <Button onClick={handelTogglemenu}>
      <FaGamepad size={32} color='#ff6347'/>
    </Button>
)}
    </MainContext.Consumer>

  );
};