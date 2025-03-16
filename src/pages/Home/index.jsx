import { useEffect, useState } from "react";
import Note from "../../components/Note";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  NotesWrapper,
  CreateNoteContainer,
  InputTitle,
  QuillEditor,
  SubmitButton,
  StyledTitle,
  StyledLabel,
  HomeContainer,
  StyledContainerSelect,
  StyledSelect,
  TagContainer,
} from "./Home.styled";
import {
  createOrUpdateNote,
  getNotes,
  noteDelete,
} from "../../api/noteService";
import { toast } from "react-toastify";
import TagButton from "../../components/TagButton";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("pessoal");
  const [editingNote, setEditingNote] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const TAGS = [
    { value: "urgente", label: "Urgente", color: "red" },
    { value: "estudo", label: "Estudo", color: "blue" },
    { value: "ideia", label: "Ideia", color: "yellow" },
    { value: "projeto", label: "Projeto", color: "purple" },
    { value: "financeiro", label: "Financeiro", color: "green" },
    { value: "pessoal", label: "Pessoal", color: "gray" },
    { value: "trabalho", label: "Trabalho", color: "orange" },
    { value: "lazer", label: "Lazer", color: "pink" },
    { value: "saude", label: "Saúde", color: "teal" },
    { value: "eventos", label: "Eventos", color: "cyan" },
  ];

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
      await createOrUpdateNote({ id: editingNote?.id, title, content, tag });
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
    setTag(note.tag);
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

  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tag === selectedTag)
    : notes;

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
      <TagContainer>
        {TAGS.map(({ value, label, color }) => (
          <TagButton
            key={value}
            value={value}
            color={color}
            label={label}
            onClick={() => setSelectedTag(selectedTag === value ? null : value)}
            active={selectedTag === value}
          />
        ))}
      </TagContainer>
      <StyledTitle>Notas</StyledTitle>
      <NotesWrapper>
        {filteredNotes.map((note) => (
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
          <StyledContainerSelect>
            <StyledLabel>Tag</StyledLabel>
            <StyledSelect value={tag} onChange={(e) => setTag(e.target.value)}>
              {TAGS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </StyledSelect>
          </StyledContainerSelect>
          <SubmitButton type="submit">
            {editingNote ? "Atualizar" : "Criar"} Nota
          </SubmitButton>
        </form>
      </CreateNoteContainer>
    </HomeContainer>
  );
};

export default Home;
