import { useEffect, useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledInputField,
  StyledTitleForm,
  StyledUnderlined,
} from "./Register.styled";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authService";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledTitleForm>Faça o seu cadastro</StyledTitleForm>
          <StyledUnderlined></StyledUnderlined>
        </div>
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
        <StyledInputField>
          <label htmlFor="confirmPassword">Confirmação de senha</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </StyledInputField>
        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        )}
        <StyledButton type="submit">Registrar</StyledButton>
        <span>
          Já possui um usuário? <Link to="/login">Faça login.</Link>
        </span>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Register;
