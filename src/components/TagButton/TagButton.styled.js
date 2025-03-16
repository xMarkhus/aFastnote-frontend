import styled from "styled-components";

export const StyledTagButton = styled.button`
  background-color: ${(props) => (props.$active ? props.color : props.color)};
  opacity: ${(props) => (props.$active ? "1" : "0.6")};
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s, background-color 0.3s;

  &:hover {
    opacity: 1;
  }
`;
