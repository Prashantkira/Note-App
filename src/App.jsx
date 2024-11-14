import NoteProvider from "./context/NotesContext";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <div id="app">
      <NoteProvider>
        <NotesPage />
      </NoteProvider>
    </div>
  );
}

export default App;
