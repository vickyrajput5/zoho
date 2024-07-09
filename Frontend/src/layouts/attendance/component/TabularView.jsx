import React from "react";
import "./style.css";
const TabularView = () => {
  // Sample data, replace with real data fetch
  const data = [
    {
      date: "2023-07-03",
      firstIn: "09:00 AM",
      lastOut: "05:00 PM",
      totalHours: 8,
      payableHours: 8,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-04",
      firstIn: "09:00 AM",
      lastOut: "05:00 PM",
      totalHours: 8,
      payableHours: 8,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-05",
      firstIn: "09:00 AM",
      lastOut: "05:00 PM",
      totalHours: 8,
      payableHours: 8,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-06",
      firstIn: "09:00 AM",
      lastOut: "05:00 PM",
      totalHours: 8,
      payableHours: 8,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-07",
      firstIn: "09:00 AM",
      lastOut: "05:00 PM",
      totalHours: 8,
      payableHours: 8,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-08",
      firstIn: "10:00 AM",
      lastOut: "04:00 PM",
      totalHours: 6,
      payableHours: 6,
      overtime: 0,
      status: "Regular",
      shift: "Day",
      regularization: "None",
    },
    {
      date: "2023-07-09",
      firstIn: "OFF",
      lastOut: "OFF",
      totalHours: 0,
      payableHours: 0,
      overtime: 0,
      status: "OFF",
      shift: "OFF",
      regularization: "None",
    },
  ];

  return (
    <div className="tabular-view-container">
      <h2>Tabular View</h2>
      <table className="tabular-view">
        <thead>
          <tr>
            <th>Date</th>
            <th>First In</th>
            <th>Last Out</th>
            <th>Total Hours</th>
            <th>Payable Hours</th>
            <th>Overtime/Deviation</th>
            <th>Status</th>
            <th>Shift</th>
            <th>Regularization</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="tabular-row">
              <td>{item.date}</td>
              <td>{item.firstIn}</td>
              <td>{item.lastOut}</td>
              <td>{item.totalHours}</td>
              <td>{item.payableHours}</td>
              <td>{item.overtime}</td>
              <td>{item.status}</td>
              <td>{item.shift}</td>
              <td>{item.regularization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabularView;
