import { StyledContainer } from "./PageContainer.styled";

const PageContainer = ({
  children,
  direction,
  padding,
  marginTop,
  backgroundImage,
}) => {
  return (
    <StyledContainer
      direction={direction}
      padding={padding}
      marginTop={marginTop}
      backgroundImage={backgroundImage}
    >
      {children}
    </StyledContainer>
  );
};

export default PageContainer;
