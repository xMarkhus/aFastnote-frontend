import {
  NoteContentContainer,
  NoteTitle,
  NoteContent,
  NoteDate,
  NoteContainer,
  StyledFooterNote,
  StyledContainerActions,
} from "./Note.styled";

import { Trash, SquarePen } from "lucide-react";

const Note = ({ note, handleEdit, onDelete }) => {
  const dateFormated = new Date(note.created_at).toLocaleDateString("pt-BR");

  return (
    <NoteContainer>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteContentContainer>
        <NoteContent dangerouslySetInnerHTML={{ __html: note.content }} />
      </NoteContentContainer>
      <StyledFooterNote>
        <NoteDate>{dateFormated}</NoteDate>
        <StyledContainerActions>
          <SquarePen
            onClick={() => handleEdit(note)}
            style={{ cursor: "pointer" }}
          />
          <Trash
            onClick={() => onDelete(note.id)}
            style={{ cursor: "pointer" }}
          />
        </StyledContainerActions>
      </StyledFooterNote>
    </NoteContainer>
  );
};

export default Note;
