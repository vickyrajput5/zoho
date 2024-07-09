import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { CheckoutPage } from "CheckoutPage/CheckoutPage";

export const LeaveTrack = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <CheckoutPage/> */}
      Leave Tracker
    </DashboardLayout>
  );
};
