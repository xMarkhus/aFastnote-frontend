import styled, { keyframes } from "styled-components";

// Definir a animação de rotação
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Container principal para o carregamento
export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.3); Fundo semitransparente */
  height: 100vh;
`;

// Container interno para centralizar o conteúdo do loader
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background: #222222;
`;

// Estilos da bola giratória
export const LoadingBall = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid white;
  border-top-color: #ffea00; /* Cor amarela para a parte de cima */
  animation: ${spin} 1s linear infinite; /* A animação de rotação */
`;
