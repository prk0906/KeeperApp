import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesItem) => (
        <Note
          key={notesItem.key}
          titles={notesItem.title}
          contents={notesItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
