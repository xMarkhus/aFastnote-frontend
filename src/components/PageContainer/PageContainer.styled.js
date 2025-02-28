import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "row"};
  padding: ${({ padding }) => padding || "0"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  min-height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage || "/background.jpg"});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;
