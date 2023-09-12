import React from "react";
import SidebarLink from "../../components/sidebarLink";
import appRoutes from "../../lib/appRoutes";

import {
  TipsAndUpdates,
  DeleteOutlineOutlined,
  ArchiveOutlined,
} from "@mui/icons-material";

function Dashboard_layout() {
  return (
    <div className="sidebar">
      <div className="p-3 h-100">
        <SidebarLink
          icon={<TipsAndUpdates />}
          url={appRoutes.notes}
          end={true}
          label={"Notes"}
        />
        <SidebarLink
          icon={<ArchiveOutlined />}
          url={appRoutes.archives}
          label={"Archives"}
        />
        <SidebarLink
          icon={<DeleteOutlineOutlined />}
          url={appRoutes.bin}
          label={"Bin"}
        />
      </div>
    </div>
  );
}

export default Dashboard_layout;
