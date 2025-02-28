import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authService";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import TitleForm from "../../components/TitleForm";
import TextField from "../../components/TextField";
import ButtonForm from "../../components/ButtonForm";
import AuthRedirect from "../../components/AuthRedirect";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const validationForm = () => {
    if (username.length < 8) {
      setError("O nome de usuário deve conter pelo menos 8 caracteres.");
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:,.<>?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial."
      );
      return false;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem. Por favor, confirme sua senha.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationForm()) return;

    setIsLoading(true);

    const { success, error } = await registerUser(
      username,
      password,
      confirmPassword
    );

    if (!success) {
      setError(error);
    } else {
      toast.success("Usuário cadastrado com sucesso");
      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <PageContainer>
      <Form onSubmit={handleSubmit}>
        <TitleForm>Registrar-se</TitleForm>
        <TextField
          label="Usuário"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Senha"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirmar senha"
          id="confirm_password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        )}
        <ButtonForm isLoading={isLoading} loadingText="Registrando...">
          Registrar
        </ButtonForm>
        <AuthRedirect
          message="Já possui uma conta?"
          linkTo="/login"
          linkText="Faça login."
        />
      </Form>
    </PageContainer>
  );
};

export default Register;
