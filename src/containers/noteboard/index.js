import React from "react";
import SidebarLink from "../../components/sidebarLink";
import appRoutes from "../../lib/appRoutes";
import { Outlet } from "react-router";

function Dashboard_layout() {
  return (
    <>
      <div className="col-8 p-4">
        <div className="row">
          <aside className="col-4">
            <SidebarLink url={appRoutes.notes} label={"Notes"} />
            <SidebarLink url={appRoutes.reminders} label={"Reminders"} />
            <SidebarLink url={appRoutes.archives} label={"Archives"} />
            <SidebarLink url={appRoutes.bin} label={"Bin"} />
          </aside>

          <section className="col-8">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard_layout;
