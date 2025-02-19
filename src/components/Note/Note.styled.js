import styled from "styled-components";

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333233;
  color: #ffff81;
  padding: 25px;
  margin-bottom: 0px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  width: 250px;
  max-height: 250px;
  overflow: hidden;
`;

export const NoteContentContainer = styled.div`
  font-size: 16px;
  color: #ffffff;
  word-wrap: break-word;
  overflow-y: auto;
  max-height: 200px;
  padding-right: 10px;
  padding-bottom: 10px;
  white-space: normal;
  word-wrap: break-word;
  flex-grow: 1; /* Faz com que o conteúdo ocupe o espaço disponível */

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
  margin-bottom: 5px;
  word-wrap: break-word; /* Quebra palavras longas no título */
`;

export const NoteContent = styled.div``;

export const NoteDate = styled.p`
  font-size: 14px;
  color: #ffff56;
  text-align: right;
`;

export const StyledFooterNote = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: auto; /* Garante que o footer fique sempre na parte inferior */
`;

export const StyledContainerActions = styled.div`
  display: flex;
  gap: 10px;
`;
