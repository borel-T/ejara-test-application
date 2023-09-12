import actions from "./actions";

// notes context initial state
export const initialState = {
  notes: [],
  // notes: [
  //   {
  //     archived: false, // default
  //     deleted: false, // default
  //     title: "title 1",
  //     text: "contexnt 1",
  //  uiuid:"sfsdfwe"
  //     bgColor: "",
  //   },
  //   {
  //     archived: true, // default
  //     deleted: false, // default
  //     title: "title 61",
  //     text: "contexnt 61",
  //  uiuid:"sfsdfwesfdf"
  //     bgColor: "green",
  //   },
  //   {
  //     archived: true, // default
  //     deleted: false, // default
  //     title: "title 61",
  //     text: "contexnt 61",
  //  uiuid:"sfsdfwssfsdfe"
  //     bgColor: "yellow",
  //   },
  //   {
  //     archived: false, // default
  //     deleted: true, // default
  //     title: "title 51",
  //  uiuid:"sfsdfw5656e"
  //     text: "contexnt 51",
  //     bgColor: "",
  //   },
  //   {
  //     archived: false, // default
  //     deleted: true, // default
  //     title: "title 14",
  //     text: "contexnt 14",
  //  uiuid:"sfsdfw899e"
  //     bgColor: "purple",
  //   },
  // ],
};

// notes-reducer
const notesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.UPDATE_NOTE_CONTENT:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.UPDATE_NOTE_COLOR:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.ARCHIVE_NOTE:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.TRASH_NOTE:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.RESTORE_NOTE:
      return {
        ...state,
        notes: payload.notes,
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: payload.notes,
      };
    default:
      throw new Error(`No case for action type ${type}`);
  }
};

export default notesReducer;
