import styled from "styled-components";

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333233;
  color: #ffff81;
  padding: 25px;
  padding-bottom: 0px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

export const NoteContentContainer = styled.div`
  font-size: 16px;
  color: #ffffff;
  word-wrap: break-word;
  padding-right: 10px;
  padding-bottom: 10px;
  white-space: normal;
  word-wrap: break-word;
  margin-top: 10px;

  /* Estilizando o scrollbar vertical */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222222;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffff56;
    border-radius: 4px;
    border: 2px solid #222222;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffea00;
  }

  img {
    max-width: 100%;
  }
`;

export const NoteTitle = styled.h3`
  font-size: 18px;
  color: #ffff00;
  margin-top: 0px;
  text-align: center;
  margin-bottom: 5px;
  word-wrap: break-word;
`;

export const NoteContent = styled.div``;

export const StyledFooterNote = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledContainerActions = styled.div`
  display: flex;
  gap: 10px;
`

export const NoteDate = styled.p`
  font-size: 14px;
  color: #ffff56;
  text-align: right;
`;
