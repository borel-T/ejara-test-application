import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";

function BinNotes() {
  // data
  const { state, restoreNote, deleteNote } = useNotesContext();

  return (
    <>
      <h3>Bin Notes</h3>
      <NoteCardList
        list={state?.notes}
        filterBy={"deleted"}
        onRestore={restoreNote}
        listViewType={state?.listView}
        onDelete={deleteNote}
      />
    </>
  );
}

export default BinNotes;
