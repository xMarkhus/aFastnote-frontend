import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  }, [navigate, setUser]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
    </>
  );
};

export default AppRoutes;
