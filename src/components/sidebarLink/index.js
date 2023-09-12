import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLink(props) {
  const { icon = null, label = "", url = "#" } = props;

  return (
    <div className="inline-flex">
      {icon ? icon : null}
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? "color-red" : "color-green")}
      >
        {label}
      </NavLink>
    </div>
  );
}

export default SidebarLink;
