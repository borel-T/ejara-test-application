import React, { createContext, useContext, useReducer } from "react";
import notesReducer, { initialState } from "./reducers";
import actions from "./actions";

// Note-Context
export const NotesContext = createContext(initialState);

// Note-Context provider
export const NotesContextProvider = (props) => {
  /***********  States *****************/
  const [state, dispatch] = useReducer(notesReducer, initialState);

  /***********  Methods *****************/

  const _addNote = (note) => {
    const oldList = state?.notes;
    const newNote = {
      ...note,
      archived: false, // default
      deleted: false, // default
    };
    let newList = [...oldList, newNote];
    // dispactcher
    dispatch({
      type: actions.ADD_NOTE,
      payload: {
        notes: newList,
      },
    });
  };

  const _archiveNote = (noteId) => {
    const list = state?.notes;
    let index = list.findIndex((item) => item.uuid === noteId);

    if (index > -1) {
      list[index].archived = !list[index].archived;

      // dispactcher
      dispatch({
        type: actions.ARCHIVE_NOTE,
        payload: {
          notes: list,
        },
      });
    }
  };

  const _updateNoteColor = (noteId, newColor) => {
    const list = state?.notes;

    let index = list.findIndex((item) => item.uuid === noteId);
    if (index > -1) {
      list[index].bgColor = newColor;

      // dispactcher
      dispatch({
        type: actions.DELETE_NOTE,
        payload: {
          notes: list,
        },
      });
    }
  };

  const _restoreNote = (noteId) => {
    const list = state?.notes;
    let index = list.findIndex((item) => item.uuid === noteId);

    if (index > -1) {
      // change delete-status
      list[index].deleted = false;
      // dispactcher
      dispatch({
        type: actions.RESTORE_NOTE,
        payload: {
          notes: list,
        },
      });
    }
  };

  const _deleteNote = (noteId, flag) => {
    const list = state?.notes;

    let index = list.findIndex((item) => item.uuid === noteId);
    if (index > -1) {
      // temporal -> goes to bin
      if (flag === "temporal") {
        // change delete-status
        list[index].deleted = true;
        // all deleted are removed from archives too
        list[index].archived = false;

        const newList = [...list];
        // dispactcher
        dispatch({
          type: actions.TRASH_NOTE,
          payload: {
            notes: newList,
          },
        });
      }
      // final -> deletes
      if (flag === "final") {
        // change delete-status
        list.splice(index, 1);
        // dispactcher
        dispatch({
          type: actions.DELETE_NOTE,
          payload: {
            notes: list,
          },
        });
      }
    }
  };

  const contextData = {
    // states
    state,
    // methods
    addNote: _addNote,
    updateNoteColor: _updateNoteColor,
    archiveNote: _archiveNote,
    restoreNote: _restoreNote,
    deleteNote: _deleteNote,
  };

  // pass the value in provider and return
  return (
    <NotesContext.Provider value={contextData}>
      {props.children}
    </NotesContext.Provider>
  );
};

// Note-Context hook
export const useNotesContext = () => {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error("Note context ust be used within Note-Context-Provider");
  }
  return context;
};
