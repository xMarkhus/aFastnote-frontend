import styled from "styled-components";

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
