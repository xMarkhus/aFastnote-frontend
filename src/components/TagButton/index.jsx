import { StyledTagButton } from "./TagButton.styled";

const TagButton = ({ label, color, active, onClick }) => {
  return (
    <StyledTagButton $active={active} color={color} onClick={onClick}>
      {label}
    </StyledTagButton>
  );
};

export default TagButton;
