import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../api/axiosInstance";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants/api";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { StyledContainer } from "./ProtectedRoute.styled";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
          setIsAuthorized(false);
          return;
        }

        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp && decoded.exp < now) {
          await refreshToken();
        } else {
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error("Erro na autenticação:", error);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);

      if (!refreshToken) {
        setIsAuthorized(false);
        return;
      }

      const response = await api.post("/api/v1/authentication/token/refresh/", {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar token:", error);
      setIsAuthorized(false);
    }
  };

  if (loading) {
    return (
      <StyledContainer>
        <Loading />
      </StyledContainer>
    )
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
