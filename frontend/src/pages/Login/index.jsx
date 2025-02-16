import { useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledInputField,
  StyledTitleForm,
  StyledUnderlined,
} from "./Login.styled";
import { data, Link, useNavigate } from "react-router-dom";
import { login } from "../../api/authService";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const reloadPage = () => {
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const { success, error } = await login(username, password);

    if (success) {
      setUser(data.username);
      navigate("/");
      reloadPage();
    } else {
      setErrorMessage(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledTitleForm>Faça o seu login</StyledTitleForm>
          <StyledUnderlined></StyledUnderlined>
        </div>
        {errorMessage && (
          <div
            style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}
          >
            {errorMessage}
          </div>
        )}
        <StyledInputField>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </StyledInputField>
        <StyledInputField>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </StyledInputField>
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </StyledButton>
        <span>
          Ainda não possui um usuário?{" "}
          <Link to={"/register"}>Registrar-se.</Link>
        </span>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Login;
