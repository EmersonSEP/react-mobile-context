import { MainContext } from "../../App";
import { NavMenu } from "./styles";

export function Menu() {
  return (
    <MainContext.Consumer>
      {({ showMenu }) => (
        <NavMenu>
          <ul>
            <li>XBox</li>
            <li>PlayStation</li>
            <li>Nitendo</li>
            <li>PC</li>
          </ul>
        </NavMenu>
      )}
    </MainContext.Consumer>
  );
}
