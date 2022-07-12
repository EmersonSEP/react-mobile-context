import { NavMenu } from "./styles";
import { MainContext, useMenu } from "../../context/MainContext";
import { useContext } from "react";


const Menu = () => {
const { showMenu } = useContext(MainContext);
  return (
      <NavMenu showMenu ={showMenu}>
      <ul>
        <li>XBox</li>
        <li>PlayStation</li>
        <li>Nitendo</li>
        <li>PC</li>
      </ul>
    </NavMenu> 
      );
  
}

export default Menu;
