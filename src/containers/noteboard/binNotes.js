import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";

function BinNotes() {
  // data
  const { state, restoreNote, deleteNote } = useNotesContext();

  return (
    <NoteCardList
      list={state?.notes}
      filterBy={"deleted"}
      onRestore={restoreNote}
      onDelete={deleteNote}
    />
  );
}

export default BinNotes;
