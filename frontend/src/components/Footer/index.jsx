import { Github, Instagram, Linkedin } from "lucide-react";
import Logo from "../../assets/logo-afastnote2.png";
import {
  StyledFooter,
  StyledLinksContainer,
  StyledLogoContainer,
  StyledTitleFooter,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <a href="/">
          <img src={Logo} alt="Logo da aFastnote" />
        </a>
      </StyledLogoContainer>
      <div>
        <StyledTitleFooter>Desenvolvido por Marcos Martins</StyledTitleFooter>
      </div>
      <StyledLinksContainer>
        <a href="https://www.instagram.com/marcos.maartiins/" target="_blank">
          <Instagram color="black" size={30} />
        </a>
        <a href="https://github.com/xMarkhus" target="_blank">
          <Github color="black" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-rogerio-martins-programador/"
          target="_blank"
        >
          <Linkedin color="black" size={30} />
        </a>
      </StyledLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
