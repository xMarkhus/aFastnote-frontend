import styled from "styled-components";
import {theme} from "../../styles/theme"

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/background.jpg");
  background-size: cover;
  height: 100vh;
`;

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

  @media (${theme.breakpoints.mobile}) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const StyledTitleForm = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 5px;
`;

export const StyledUnderlined = styled.div`
  background-color: #f8f900;
  height: 5px;
  width: 210px;
`;

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    background-color: #f1f1f1;
  }
  label {
    font-size: 18px;
  }
`;

export const StyledButton = styled.button`
  color: #ffff00;
  font-size: 18px;
  padding: 10px 20px;
  width: 212px;
  text-align: center;
  background-color: black;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #333;
  }

  &:active {
    transform: scale(0.95);
  }
`;
