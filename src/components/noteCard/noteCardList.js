import React from "react";
// components
import NoteCard from "./index";

function NoteCardList(props) {
  // data
  const { list, filterBy = "", listViewType = true } = props;
  const {
    onArchive = () => {},
    onColor = () => {},
    onRestore = () => {},
    onDelete = () => {},
  } = props;

  // render
  const renderItems = () => {
    if (list.length > 0) {
      const allowedFilters = ["archived", "deleted"];
      if (filterBy && allowedFilters.indexOf(filterBy) > -1) {
        return list.filter((x) => x[filterBy] === true);
      }
      return list.filter((x) => !x.deleted);
    }
    return [];
  };

  return (
    <>
      {/* notes */}
      <div className="row">
        {renderItems().length > 0 &&
          renderItems().map((note, key) => (
            <div className={`${listViewType ? "col-12" : "col-4"}`}>
              <NoteCard
                key={key}
                bgColor={note.bgColor}
                title={note.title}
                text={note.text}
                archived={note.archived}
                deleted={note.deleted}
                onArchive={() => onArchive(note.uuid)}
                onTrash={() => onDelete(note.uuid, "temporal")}
                onDelete={() => onDelete(note.uuid, "final")}
                onRestore={() => onRestore(note.uuid)}
                onColorChange={(color) => onColor(note.uuid, color)}
              />
            </div>
          ))}
      </div>
      {/* case: no data */}
      {renderItems().length === 0 && (
        <div className="border rounded shadow-sm p-4 mt-5">
          <h3>No Data Found !</h3>
        </div>
      )}
    </>
  );
}

export default NoteCardList;
