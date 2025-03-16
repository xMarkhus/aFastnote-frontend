import api from "./axiosInstance";

export const getNotes = async () => {
  try {
    const res = await api.get("/api/v1/notes/");

    return res.data;
  } catch (error) {
    // console.error("Erro ao carregar as notas.", error);

    throw error;
  }
};

export const createOrUpdateNote = async (note) => {
  try {
    if (note.id) {
      // console.log(`Editando a nota de ID: ${note.id}`);
      const res = await api.put(`/api/v1/notes/${note.id}/`, {
        title: note.title,
        content: note.content,
        tag: note.tag,
      });

      return res.data;
    } else {
      console.log("Criando nova nota");

      const res = await api.post("/api/v1/notes/", {
        title: note.title,
        content: note.content,
        tag: note.tag,
      });

      return res.data;
    }
  } catch (error) {
    // console.error("Erro ao salvar nota", error);

    throw error;
  }
};

export const noteDelete = async (id) => {
  try {
    const res = await api.delete(`/api/v1/notes/${id}/`);

    return res.data;
  } catch (error) {
    // console.error("Erro ao excluir nota.", error);

    throw error;
  }
};
