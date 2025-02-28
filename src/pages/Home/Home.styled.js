import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HomeContainer = styled.div`
  padding: 20px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("background.jpg");
  background-size: cover;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  color: white;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const NotesWrapper = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
  max-width: 100%;

  & > * {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffff56;
    border-radius: 4px;
  }
`;

export const CreateNoteContainer = styled.div`
  margin-top: 20px;
  max-width: 700px;
  width: 100%;
  background: #333233;
  padding: 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media (${theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ffff00;
  background: #090909;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const QuillEditor = styled.div`
  width: 100%;
  height: auto;
  background: #090909;
  color: white;
  border: 2px solid #ffff56;
  border-radius: 4px;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 10px;

  .ql-toolbar {
    background: #222;
    border-radius: 4px 4px 0 0;
  }

  .ql-container {
    height: 250px !important;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ffff00;
  border: none;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #ffff56;
  }
`;
