import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: ${({ $user }) => ($user ? "space-between" : "center")};
  background-color: #ffff00;
  border-bottom: 2px solid black;
  gap: 5px;
  img {
    max-width: 100px;
  }
`;

export const StyledContainerLogo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (${theme.breakpoints.mobile}) {
    ${({ $user }) => $user && "display: none;"}
  }
`;

export const StyledSpanUsername = styled.span`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

export const StyledTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: 600;

  @media (${theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledButtonLogout = styled.button`
  font-weight: 700;
  background-color: white;
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;
