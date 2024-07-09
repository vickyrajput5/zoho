import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import CalendarView from "./component/CalendarView";
import ListView from "./component/ListView";
import TabularView from "./component/TabularView";
import "./component/style.css";
export const Attendance = () => {
  const [view, setView] = useState("list");

  const handleChangeView = (newView) => {
    setView(newView);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="App">
        <header>
          <button onClick={() => handleChangeView("list")}>List View</button>
          <button onClick={() => handleChangeView("tabular")}>
            Tabular View
          </button>
          <button onClick={() => handleChangeView("calendar")}>
            Calendar View
          </button>
        </header>
        {view === "list" && <ListView />}
        {view === "tabular" && <TabularView />}
        {view === "calendar" && <CalendarView />}
      </div>
    </DashboardLayout>
  );
};
