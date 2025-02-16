import {
  StyledButtonLogout,
  StyledContainerLogo,
  StyledHeader,
  StyledSpanUsername,
  StyledTitle,
} from "./Header.styled";
import Logo from "../../assets/logo-afastnote2.png";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <StyledHeader $user={user}>
      {user && (
        <h3>
          Bem vindo, <StyledSpanUsername>{user}</StyledSpanUsername>
        </h3>
      )}
      <StyledContainerLogo $user={user}>
        <a href="/">
          <img src={Logo} alt="Logo da aFastnote" />
        </a>
        <StyledTitle>- bloco de notas online e gratuito</StyledTitle>
      </StyledContainerLogo>
      {user && (
        <StyledButtonLogout onClick={handleLogout}>
          Sair
        </StyledButtonLogout>
      )}
    </StyledHeader>
  );
};

export default Header;
