import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      Landing
      <Link to="/notes">Go to notes</Link>
    </div>
  );
}

export default Landing;
