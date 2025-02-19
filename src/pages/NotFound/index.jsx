import { Styled404Container, StyledInfo404, StyledParagraph404, StyledTitle404 } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Styled404Container>
      <StyledInfo404>
        <StyledTitle404>Error 404</StyledTitle404>;
        <StyledParagraph404>
          A página que você tentou buscar não existe!
        </StyledParagraph404>
      </StyledInfo404>
    </Styled404Container>
  );
};

export default NotFound;
