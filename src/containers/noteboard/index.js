import React from "react";

import NavBar from "../../components/navbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router";

function Dashboard_layout() {
  return (
    <div className="h-100">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <aside className="col-3">
            <SideBar />
          </aside>
          <section className="col-9 p-3">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_layout;
