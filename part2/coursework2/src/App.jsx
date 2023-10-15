import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteService from "./services/notes";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("Some error happened...");

  const hook = () => {
    //console.log("effect!");
    noteService.getAll().then((initialNotes) => {
      //console.log("Promise fulfilled");
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []); // Using an empty array here means it only runs once on the first render. What a strange way for react to work.

  //console.log("Render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    console.log("Notes Length Start:", notes.length);
    //console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    noteService.create(noteObject).then((returnedNote) => {
      console.log(returnedNote);
      console.log("Notes Length before:", notes.length);
      setNotes(notes.concat(returnedNote)); // Sets the note data
      setNewNote(""); // Clears the input field and it's correspondingly tied data.
      console.log("Notes Length after:", notes.length);
    });
  };

  const handleNoteChange = (event) => {
    //console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    console.log(`toggled importance of ${id} ` + id); // Note we need to use back ticks (little tilda) to make it a "Literal"

    // Easier short hand to grab the URL. Note the back ticks and dynamic id
    // const url = `http://localhost:3001/notes/${id}`;

    // User a find to get the exact note, by ID that we are editing
    const note = notes.find((n) => n.id === id);
    // Create the new copy of a note and change it appropriately.
    const changedNote = { ...note, important: !note.important };

    // Update the server with the updated version of the note.
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note ${note.content} was already removed from server}`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show: {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>

      <Footer />
    </div>
  );
};

export default App;
