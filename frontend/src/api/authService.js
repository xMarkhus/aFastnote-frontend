import api from "./axiosInstance";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/api";

export const login = async (username, password) => {
  try {
    const res = await api.post("/api/v1/authentication/token/", {
      username,
      password,
    });

    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error.response?.data?.detail || "Erro ao fazer login. Tente novamente.",
    };
  }
};

export const registerUser = async (username, password, confirmPassword) => {
  try {
    const res = await api.post("/api/v1/auth/register/", {
      username,
      password,
      confirm_password: confirmPassword,
    });
    return { success: true };
  } catch (error) {
    console.error("Erro na requisição:", error.response?.data);

    if (error.response?.data?.username?.[0]) {
      return {
        success: false,
        error: "O nome de usuário já está em uso. Escolha outro.",
      };
    }
    return { success: false, error: "Erro ao cadastrar usuário." };
  }
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      throw new Error("Usuário não autenticado.");
    }

    const res = await api.get("/api/v1/user/profile/", {
      headers: {
        Authorization: `Bearer ${token}`, // Passando o token no cabeçalho
      },
    });

    console.log("Resposta da API:", res.data); // Adicionando log para inspecionar a resposta

    return { success: true, data: res.data };
  } catch (error) {
    console.error("Erro na requisição:", error);
    return {
      success: false,
      error:
        error.response?.data?.detail || "Erro ao buscar perfil do usuário.",
    };
  }
};
