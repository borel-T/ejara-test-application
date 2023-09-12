import React from "react";
// context
import { useNotesContext } from "../../appContext";
// components
import NoteCardList from "../../components/noteCard/noteCardList";

function Archives() {
  // data
  const { state, archiveNote, deleteNote } = useNotesContext();

  return (
    <>
      <h3>Archives</h3>
      <NoteCardList
        list={state?.notes}
        onArchive={archiveNote}
        onDelete={deleteNote}
        listViewType={state?.listView}
        filterBy={"archived"}
      />
    </>
  );
}

export default Archives;
