import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledFooter = styled.footer`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff00;
  border-top: 2px solid black;
  gap: 15px;
  img {
    max-width: 100px;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledTitleFooter = styled.h2`
  color: black;
  font-size: 20px;

  @media (${theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;
