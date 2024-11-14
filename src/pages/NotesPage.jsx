import { useContext } from "react";
import NoteCard from "../components/NoteCard.jsx";
import { NotesContext } from "../context/NotesContext.jsx";
import Controls from "../components/Controls.jsx";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NotesContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
