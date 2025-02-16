import { useEffect, useState } from "react";
import Note from "../../components/Note";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  HomeContainer,
  NotesWrapper,
  CreateNoteContainer,
  InputTitle,
  QuillEditor,
  SubmitButton,
  StyledTitle,
  StyledLabel,
} from "./Home.styled";
import {
  createOrUpdateNote,
  getNotes,
  noteDelete,
} from "../../api/noteService";
import { toast } from "react-toastify";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error("Falha ao buscar notas.");
    }
  };

  const handleCreateOrUpdateNote = async (e) => {
    e.preventDefault();

    try {
      await createOrUpdateNote({ id: editingNote?.id, title, content });
      toast.success(
        editingNote
          ? "Nota atualizada com sucesso!"
          : "Nota criada com sucesso!"
      );

      setTitle("");
      setContent("");
      setEditingNote(null);

      fetchNotes();
    } catch (error) {
      toast.error("Erro ao salvar nota.");
    }
  };

  const handleEdit = (note) => {
    console.log("Editando nota:", note);
    setTitle(note.title);
    setContent(note.content);
    setEditingNote(note);
  };

  const handleDelete = async (id) => {
    if (confirm("Tem certeza que deseja excluir esta nota?")) {
      try {
        await noteDelete(id);
        toast.success("Nota excluída com sucesso!");
        fetchNotes();
      } catch (error) {
        toast.error("Erro ao excluir nota.", error);
      }
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",
    "bullet",
    "indent",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <HomeContainer>
      <StyledTitle>Notas</StyledTitle>
      <NotesWrapper>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </NotesWrapper>

      <CreateNoteContainer>
        <StyledTitle>{editingNote ? "Editar Nota" : "Criar Nota"}</StyledTitle>
        <form onSubmit={handleCreateOrUpdateNote}>
          <StyledLabel htmlFor="title">Título</StyledLabel>
          <InputTitle
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <StyledLabel>Conteúdo</StyledLabel>
          <QuillEditor>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              required
            />
          </QuillEditor>
          <SubmitButton type="submit">
            {editingNote ? "Atualizar" : "Criar"} Nota
          </SubmitButton>
        </form>
      </CreateNoteContainer>
    </HomeContainer>
  );
};

export default Home;
