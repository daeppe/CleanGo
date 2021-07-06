import { HeaderBar } from "./styles";
import Logo from "../../images/logo-2.svg";

const Header = () => {
  return (
    <HeaderBar>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
    </HeaderBar>
  );
};

export default Header;
