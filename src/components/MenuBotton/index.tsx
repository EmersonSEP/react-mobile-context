import { FaGamepad } from "react-icons/fa";
import { useMenu } from "../../context/MainContext/";
import { Button } from "./styles";



export function MenuButton() {
  const { handleToggMenu, showMenu } = useMenu();

  const colorIcon = showMenu ? `#20b2aa` : `#ff6347`;
  return (
    <Button onClick={handleToggMenu}>
      <FaGamepad size={32} color={colorIcon} />
    </Button>
  );
}
