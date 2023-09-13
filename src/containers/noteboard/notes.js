import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";
import NoteInput from "../../components/noteInput";

function Notes() {
  // data
  const {
    state,
    addNote,
    archiveNote,
    deleteNote,
    updateNote,
    updateNoteColor,
  } = useNotesContext();

  // note-input-handler
  const noteHandler = (note) => {
    addNote({
      uuid: crypto.randomUUID(),
      ...note,
    });
  };

  return (
    <>
      <h3 className="mb-3">Notes writer !</h3>
      <NoteInput saveNoteHandler={noteHandler} />

      {/* notes */}
      {state?.notes.length > 0 && (
        <NoteCardList
          list={state?.notes}
          onUpdate={updateNote}
          onArchive={archiveNote}
          onDelete={deleteNote}
          onColor={updateNoteColor}
          listViewType={state?.listView}
          allowNoteEditing={true}
        />
      )}
    </>
  );
}

export default Notes;
