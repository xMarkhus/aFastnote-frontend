import { StyledInputField } from "./TextField.styled";

const TextField = ({ label, id, type, value, onChange }) => {
  return (
    <StyledInputField>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </StyledInputField>
  );
};

export default TextField;
