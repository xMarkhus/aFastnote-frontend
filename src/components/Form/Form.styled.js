import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 50px;
  border-radius: 15px;
  border: 2px solid black;
  gap: 25px;
  box-sizing: border-box;

  @media (${theme.breakpoints.mobile}) {
    padding-left: 30px;
    padding-right: 30px;
    width: 95%;
    max-width: 100%;
  }
`;
