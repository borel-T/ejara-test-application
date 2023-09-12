import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import { Palette, FiberManualRecordRounded } from "@mui/icons-material";
import Paper from "@mui/material/Paper";

const COLORS = ["#ff9999", "#99ccff", "#99ff99"];

function ColorPicker(props) {
  // states
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // props
  const { onSelect = () => null } = props;

  // handlers
  const handlePicker = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="palette" onClick={handlePicker}>
        <Palette />
      </IconButton>
      {/* colors picker */}
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper>
          <div className="p-1">
            {COLORS.map((color, key) => (
              <IconButton key={key} onClick={() => onSelect(color)}>
                <FiberManualRecordRounded style={{ color }} />
              </IconButton>
            ))}
          </div>
        </Paper>
      </Popover>
    </>
  );
}

export default ColorPicker;
