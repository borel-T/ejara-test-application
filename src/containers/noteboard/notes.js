import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";
import NoteInput from "../../components/noteInput";

function Notes() {
  // data
  const { state, addNote, archiveNote, deleteNote, updateNoteColor } =
    useNotesContext();

  // note-input-handler
  const noteHandler = (note) => {
    addNote({
      uuid: crypto.randomUUID(),
      ...note,
    });
  };

  return (
    <div>
      <NoteInput saveNoteHandler={noteHandler} />

      {/* notes */}
      <NoteCardList
        list={state?.notes}
        onArchive={archiveNote}
        onDelete={deleteNote}
        onColor={updateNoteColor}
      />
    </div>
  );
}

export default Notes;
