import { HeaderBar } from "./styles";
import LogoGreen from "../../asssets/svg/logo-2.svg";
import LogoWhite from "../../asssets/svg/logo-1.svg";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  whiteSchema?: boolean;
}

const Header = ({ children, whiteSchema }: HeaderProps) => {
  return (
    <HeaderBar>
      <figure>
        <img src={whiteSchema ? LogoWhite : LogoGreen} alt="Logo" />
      </figure>
      <nav>{children}</nav>
    </HeaderBar>
  );
};

export default Header;
