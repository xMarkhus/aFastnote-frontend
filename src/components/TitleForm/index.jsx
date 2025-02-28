import { StyledTitleForm, StyledUnderlined } from "./TitleForm.styled";

const TitleForm = ({ children }) => {
  return (
    <div>
      <StyledTitleForm>{children}</StyledTitleForm>
      <StyledUnderlined></StyledUnderlined>
    </div>
  );
};

export default TitleForm;
