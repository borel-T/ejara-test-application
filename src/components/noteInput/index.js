import React, { useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import ColorPicker from "../colorPicker";
import { ArchiveOutlined } from "@mui/icons-material";

const DEFAUlT_NOTE = {
  title: "",
  text: "",
  bgColor: "#fff",
  archived: false,
};

function NoteInput(props) {
  const { saveNoteHandler = null } = props;

  // states
  const [myNote, setMyNote] = useState(DEFAUlT_NOTE);
  const [fullDisplay, setFullDisplay] = useState(false);

  // handle input
  function saveNote() {
    // save not only if title or text ain't empty
    if (saveNoteHandler && (myNote.text !== "" || myNote.title !== "")) {
      saveNoteHandler(myNote);
      setMyNote(DEFAUlT_NOTE);
    }
    if (fullDisplay === true) {
      setFullDisplay(!fullDisplay);
    }
  }

  return (
    <ClickAwayListener onClickAway={saveNote}>
      <div
        className="border p-3 mb-5 rounded"
        style={{ backgroundColor: myNote.bgColor }}
      >
        {/* title */}
        {fullDisplay && (
          <input
            className="mb-2 border-0 fs-5 d-block w-100 fw-bold"
            placeholder="Title"
            style={{ border: "none", background: "none" }}
            value={myNote.title}
            onChange={(e) => {
              setMyNote({
                ...myNote,
                title: e.target.value,
              });
            }}
          />
        )}

        {/* text area */}
        <textarea
          className="w-100"
          style={{ border: "none", background: "none" }}
          placeholder="Take a note..."
          value={myNote.text}
          onFocus={() => setFullDisplay(true)}
          onChange={(e) => {
            setMyNote({
              ...myNote,
              text: e.target.value,
            });
          }}
        />
        {fullDisplay && (
          <div className="d-flex">
            {/* color */}
            <ColorPicker
              onSelect={(color) =>
                setMyNote({
                  ...myNote,
                  bgColor: color,
                })
              }
            />
            {/* archiving */}
            <IconButton
              aria-label="archive"
              onClick={() =>
                setMyNote({
                  ...myNote,
                  archived: !myNote.archived,
                })
              }
            >
              <ArchiveOutlined color={myNote.archived ? "primary" : ""} />
            </IconButton>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default NoteInput;
