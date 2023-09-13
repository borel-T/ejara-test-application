import React from "react";
import {
  ArchiveOutlined,
  DeleteOutlineOutlined,
  RestoreFromTrash,
  DeleteForever,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ColorPicker from "../colorPicker";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

function NoteCard(props) {
  // attriubtes
  const {
    title = "",
    text = "",
    archived = false,
    deleted = false,
    bgColor = "#fff",
    allowEdit = false,
  } = props;

  // states
  const [newTitle, setNewTitle] = React.useState(title);
  const [newText, setNewText] = React.useState(text);

  // handlers
  const {
    onArchive = () => {},
    onColorChange = () => {},
    onTrash = () => {},
    onRestore = () => {},
    onDelete = () => {},
    onUpdate = () => {},
  } = props;

  return (
    <ClickAwayListener
      onClickAway={() => onUpdate({ title: newTitle, text: newText })}
    >
      <div
        className="note-card border p-3 mb-3 rounded shadow-sm"
        style={{ ...(bgColor && { backgroundColor: bgColor }) }}
      >
        <input
          className="mb-2 border-0 fs-5 d-block w-100 fw-bold"
          disabled={!allowEdit}
          value={newTitle}
          autoFocus={false}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />

        {/* text area */}
        <textarea
          className="w-100"
          disabled={!allowEdit}
          value={newText}
          autoFocus={false}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />

        {deleted && (
          <div className="d-flex">
            <Tooltip title={"Restore note"}>
              <IconButton aria-label="archive" onClick={onRestore}>
                <RestoreFromTrash color="success" />
              </IconButton>
            </Tooltip>

            <Tooltip title={"Delete note forever"}>
              <IconButton aria-label="delete" onClick={onDelete}>
                <DeleteForever color="error" />
              </IconButton>
            </Tooltip>
          </div>
        )}

        {!deleted && (
          <div className="d-flex">
            <ColorPicker onSelect={onColorChange} />
            <Tooltip title={"Archive note"}>
              <IconButton aria-label="archive" onClick={onArchive}>
                <ArchiveOutlined color={archived ? "primary" : ""} />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Throw note to bin"}>
              <IconButton aria-label="delete" onClick={onTrash}>
                <DeleteOutlineOutlined />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default NoteCard;
