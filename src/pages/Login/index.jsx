import { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { login } from "../../api/authService";
import { useAuth } from "../../contexts/AuthContext";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import TextField from "../../components/TextField";
import ButtonForm from "../../components/ButtonForm";
import AuthRedirect from "../../components/AuthRedirect";
import PageContainer from "../../components/PageContainer";

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
    <PageContainer>
      <Form onSubmit={handleSubmit}>
        <TitleForm>Faça o seu login</TitleForm>
        {errorMessage && (
          <div
            style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}
          >
            {errorMessage}
          </div>
        )}
        <TextField
          label="Usuário"
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonForm isLoading={isLoading} loadingText="Entrando...">
          Entrar
        </ButtonForm>
        <AuthRedirect
          message="Ainda não possui um usuário?"
          linkTo="/register"
          linkText="Registre-se."
        />
      </Form>
    </PageContainer>
  );
};

export default Login;
