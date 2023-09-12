import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";

function Archives() {
  // data
  const { state, archiveNote, deleteNote } = useNotesContext();

  return (
    <NoteCardList
      list={state?.notes}
      onArchive={archiveNote}
      onDelete={deleteNote}
      filterBy={"archived"}
    />
  );
}

export default Archives;
