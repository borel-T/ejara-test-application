import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLink(props) {
  const { icon = null, label = "", url = "#", end = false } = props;

  const navStyles = ({ isActive }) => {
    return isActive ? "side-navlink active-link" : "side-navlink";
  };

  return (
    <NavLink end={end} to={url} className={navStyles}>
      {icon ? icon : null}
      <span className="ps-3">{label}</span>
    </NavLink>
  );
}

export default SidebarLink;
