import { StyledButton } from "./ButtonForm.styled";

const ButtonForm = ({
  children,
  isLoading = false,
  loadingText,
  ...props
}) => {
  return (
    <StyledButton type="submit" disabled={isLoading} {...props}>
      {isLoading ? loadingText : children}
    </StyledButton>
  );
};

export default ButtonForm;
