import React from "react";
import {
  ArchiveOutlined,
  DeleteOutlineOutlined,
  RestoreFromTrash,
  DeleteForever,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import ColorPicker from "../colorPicker";

function NoteCard(props) {
  // attriubtes
  const {
    title = "",
    text = "",
    archived = false,
    deleted = false,
    bgColor = "#fff",
  } = props;

  // handlers
  const {
    onArchive = () => {},
    onColorChange = () => {},
    onTrash = () => {},
    onRestore = () => {},
    onDelete = () => {},
  } = props;

  return (
    <div
      className="border p-3 mb-3 rounded shadow-sm"
      style={{ ...(bgColor && { backgroundColor: bgColor }) }}
    >
      <h5>{title}</h5>
      <p>{text}</p>

      {deleted && (
        <div className="d-flex">
          <IconButton aria-label="archive" onClick={onRestore}>
            <RestoreFromTrash color="success" />
          </IconButton>
          <IconButton aria-label="delete" onClick={onDelete}>
            <DeleteForever color="error" />
          </IconButton>
        </div>
      )}

      {!deleted && (
        <div className="d-flex">
          <ColorPicker onSelect={onColorChange} />
          <IconButton aria-label="archive" onClick={onArchive}>
            <ArchiveOutlined color={archived ? "primary" : ""} />
          </IconButton>
          <IconButton aria-label="delete" onClick={onTrash}>
            <DeleteOutlineOutlined />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default NoteCard;
